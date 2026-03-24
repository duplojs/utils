import { F } from "@scripts";

F.run(
	function *() {
		yield *F.step("load config");
		return "done";
	},
	{ includeDetails: true },
); // { result: "done", steps: ["load config"] }

F.run(
	function *() {
		const user = yield *F.step("read cache", () => "user-1");
		return user;
	},
); // "user-1"
