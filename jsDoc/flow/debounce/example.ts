import { F } from "@scripts";

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

void runSearch("first"); // Promise<"first" | "skipped">

void runSearch("second"); // Promise<"second" | "skipped">

const refreshFlow = F.create(
	async function *(section: string) {
		yield *F.debounce(500);
		return Promise.resolve(section);
	},
);
const runRefresh = F.toFunction(refreshFlow);
await runRefresh("users"); // Promise<"users" | undefined>

const saveFlow = F.create(
	async function *(name: string) {
		yield *F.debounce(
			200,
			{ returnValue: "cancelled" as const },
		);
		return Promise.resolve(`saved:${name}` as const);
	},
);
const runSave = F.toFunction(saveFlow);
await runSave("alice"); // Promise<`saved:${string}` | "cancelled">
