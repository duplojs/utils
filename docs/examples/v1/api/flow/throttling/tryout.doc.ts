import { F } from "@duplojs/utils";

const searchFlow = F.create(
	function *(query: string) {
		yield *F.throttling(
			300,
			{ returnValue: "skipped" as const },
		);
		return query;
	},
);

const runSearch = F.toFunction(searchFlow);

const firstResult = runSearch("first");
const secondResult = runSearch("second");
// firstResult: "first"
// secondResult: "skipped"
