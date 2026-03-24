import { F } from "@duplojs/utils";

const upperCaseFlow = F.create(
	function *(input: string) {
		return input.toUpperCase();
	},
);

const result = F.run(
	function *() {
		return yield *F.exec(upperCaseFlow, { input: "hello" });
	},
);
// result: "HELLO"
