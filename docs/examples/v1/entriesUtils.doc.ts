import { O, type ExpectType } from "@duplojs/utils";

interface Input {
	name: string;
	age?: number;
}

const input: Input = {
	name: "Mathieu",
	age: undefined,
};

const entries = O.entries(input);

type check = ExpectType<
	typeof entries,
	(
		| ["name", string]
		| ["age", undefined]
		| ["age", number]
	)[], // the real type 💪
	"strict"
>;
