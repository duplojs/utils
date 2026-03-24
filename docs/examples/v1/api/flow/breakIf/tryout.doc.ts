import { F } from "@duplojs/utils";

const result = F.run(
	function *() {
		yield *F.breakIf(2, (value) => value === 2);
		return "done";
	},
);
// result: 2
