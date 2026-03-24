import { F } from "@scripts";

F.run(
	function *() {
		yield *F.breakIf(2, (value) => value === 2);

		return "test";
	},
); // 2

F.run(
	function *() {
		const value = yield *F.breakIf("keep", (value) => value === "stop");
		return value;
	},
); // "keep"

F.run(
	function *() {
		yield *F.step("before break");
		yield *F.breakIf(2, (value) => value === 2);
		return "done";
	},
	{ includeDetails: true },
); // { result: 2, steps: ["before break"] }
