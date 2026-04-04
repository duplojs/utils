import { F } from "@duplojs/utils";

const searchFlow = F.create(
	async function *(query: string) {
		yield *F.debounce(
			300,
			{ returnValue: "skipped" as const },
		);
		return Promise.resolve(query);
	},
);

const runSearch = F.toFunction(searchFlow);

const firstResult = runSearch("first");
const secondResult = runSearch("second");
// firstResult resolves to "skipped"
// secondResult resolves to "second"
