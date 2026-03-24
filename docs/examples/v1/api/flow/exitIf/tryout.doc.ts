import { F } from "@duplojs/utils";

const childFlow = F.create(
	function *() {
		yield *F.exitIf("stop", (value) => value === "stop");
		return "done";
	},
);

const result = F.run(
	function *() {
		return yield *F.exec(childFlow);
	},
);
// result: "stop"
