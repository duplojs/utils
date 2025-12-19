import { createBuilder, DObject, type Builder } from "@duplojs/utils";

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
	.set("build", ({ accumulator }) => {
		const url = new URL(accumulator.base);
		url.pathname = accumulator.path.join("/");
		for (const [key, value] of DObject.entries(accumulator.query)) {
			url.searchParams.set(key, value);
		}
		return url.toString();
	});

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
