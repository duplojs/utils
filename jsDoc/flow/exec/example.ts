/* eslint-disable require-yield */
import { F } from "@scripts";

const upperCaseFlow = F.create(
	function *(input: string) {
		return input.toUpperCase();
	},
);

const userFlow = F.create(
	function *(id: number) {
		return `user-${id}`;
	},
);

const breakableFlow = F.create(
	function *(value: number) {
		yield *F.breakIf(value, (current) => current === 2);
		return "done";
	},
);

F.run(
	function *() {
		return yield *F.exec(upperCaseFlow, { input: "hello" });
	},
); // "HELLO"

F.run(
	function *() {
		return yield *F.exec(userFlow, { input: 42 });
	},
); // "user-42"

F.run(
	function *() {
		return yield *F.exec(breakableFlow, { input: 2 });
	},
); // 2
