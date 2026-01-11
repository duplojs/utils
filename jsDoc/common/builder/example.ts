import { DArray, createBuilder, DObject, pipe, type Builder } from "@scripts";

interface UrlAccumulator {
	base: string;
	path: string[];
	query: Record<string, string>;
}

interface UrlBuilder extends Builder<UrlAccumulator> {
	path(segment: string): UrlBuilder;
	query(key: string, value: string): UrlBuilder;
	build(): string;
}

const urlBuilderHandler = createBuilder<UrlBuilder>("urlBuilder");

urlBuilderHandler
	.set("path", ({ args, accumulator, next }) => {
		const [segment] = args;
		return next({
			...accumulator,
			path: [...accumulator.path, segment],
		});
	})
	.set("query", ({ args, accumulator, next }) => {
		const [key, value] = args;
		return next({
			...accumulator,
			query: {
				...accumulator.query,
				[key]: value,
			},
		});
	})
	.set("build", ({ accumulator }) => pipe(
		accumulator,
		DObject.to({
			base: DObject.getProperty("base"),
			path: ({ path }) => DArray.join(path, "/"),
			query: ({ query }) => DObject.entries(query),
		}),
		({ base, path, query }) => {
			const url = new URL(base);
			url.pathname = path;
			DArray.map(
				query,
				([key, value]) => void url.searchParams.set(key, value),
			);
			return url.toString();
		},
	));

// "https://example.com/users?page=1"
const url = urlBuilderHandler
	.use({
		base: "https://example.com",
		path: [],
		query: {},
	})
	.path("users")
	.query("page", "1")
	.build();

// Override (le dernier set gagne)
urlBuilderHandler.set("build", ({ accumulator }) => `${accumulator.base}/${accumulator.path.join("/")}`);

// "https://example.com/docs"
const overridden = urlBuilderHandler
	.use({
		base: "https://example.com",
		path: [],
		query: {},
	})
	.path("docs")
	.build();
