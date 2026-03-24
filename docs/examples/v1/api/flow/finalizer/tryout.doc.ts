import { F } from "@duplojs/utils";

const logs: string[] = [];

const result = F.run(
	function *() {
		yield *F.finalizer(() => logs.push("flush"));
		return "done";
	},
);
// result: "done"
// logs: ["flush"]
