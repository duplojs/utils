import { F } from "@duplojs/utils";

const logs: string[] = [];

const result = F.run(
	function *() {
		yield *F.defer(() => logs.push("close"));
		return "done";
	},
);
// result: "done"
// logs: ["close"]
