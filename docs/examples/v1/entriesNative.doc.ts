import { type ExpectType } from "@duplojs/utils";

interface Input {
	name: string;
	age?: number;
}

const input: Input = {
	name: "Mathieu",
	age: undefined,
};

const entries = Object.entries(input);

type check = ExpectType<
	typeof entries,
	[string, any][], // ????? 🤬
	"strict"
>;
