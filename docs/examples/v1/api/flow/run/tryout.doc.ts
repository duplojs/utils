import { F } from "@duplojs/utils";

const result = F.run(
	function *() {
		yield *F.step("load user");
		yield *F.breakIf(2, (value) => value === 2);
		return "done";
	},
	{ includeDetails: true },
);
// result: { result: 2, steps: ["load user"] }
