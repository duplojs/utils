import { F } from "@duplojs/utils";

const result = F.run(
	function *() {
		yield *F.step("load config");
		return "done";
	},
	{ includeDetails: true },
);
// result: { result: "done", steps: ["load config"] }
