import { F } from "@duplojs/utils";

const greetingFlow = F.create(
	function *(name: string) {
		return `hello ${name}`;
	},
);

const result = F.run(greetingFlow, { input: "Ada" });
// result: "hello Ada"
