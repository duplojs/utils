import { F } from "@scripts";

const thirdLevelFlow = F.create(
	function *() {
		yield *F.exitIf("stop", (value) => value === "stop");
		return "done";
	},
);

const secondLevelFlow = F.create(
	function *() {
		return yield *F.exec(thirdLevelFlow);
	},
);

const firstLevelFlow = F.create(
	function *() {
		return yield *F.exec(secondLevelFlow);
	},
);

F.run(
	function *() {
		return yield *F.exitIf(2, (value) => value === 2);
	},
); // 2

F.run(
	function *() {
		const value = yield *F.exitIf("keep", (value) => value === "stop");
		return value;
	},
); // "keep"

F.run(
	function *() {
		yield *F.step("before deep exit");
		return yield *F.exec(firstLevelFlow);
	},
	{ includeDetails: true },
); // { result: "stop", steps: ["before deep exit"] }
