import { F } from "@scripts";

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

runSearch("first"); // "first"

runSearch("second"); // "skipped"

const latestFlow = F.create(
	async function *(value: string) {
		yield *F.throttling(
			500,
			{
				returnValue: "ignored" as const,
				keepLast: true,
			},
		);
		return Promise.resolve(value);
	},
);
const runLatestFlow = F.toFunction(latestFlow);
await runLatestFlow("latest"); // Promise<"latest" | "ignored">
