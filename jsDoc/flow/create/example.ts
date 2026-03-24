/* eslint-disable require-yield */
import { F } from "@scripts";

const greetingFlow = F.create(
	function *(name: string) {
		return `hello ${name}`;
	},
);

F.run(greetingFlow, { input: "Ada" }); // "hello Ada"

const breakableFlow = F.create(
	function *(value: number) {
		yield *F.breakIf(value, (current) => current === 0);
		return value * 2;
	},
);

F.run(breakableFlow, { input: 0 }); // 0

F.run(
	function *() {
		return yield *F.exec(greetingFlow, { input: "Linus" });
	},
); // "hello Linus"

const asyncFlow = F.create(
	async function *(name: string) {
		const value = await name.toUpperCase();
		return value;
	},
);

await F.run(asyncFlow, { input: "flow" }); // Promise<"FLOW">
