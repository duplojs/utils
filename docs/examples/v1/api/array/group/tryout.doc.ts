import { A, S, type ExpectType } from "@duplojs/utils";

const input = ["apple", "banana", "peach", "orange", "pineapple"] as const;

const result = A.group(
	input,
	(fruit, { output }) => S.endsWith(fruit, "e")
		? output("succulent", fruit)
		: output("horrible", fruit),
);

type check = ExpectType<
	typeof result,
	{
		readonly succulent?: readonly ["apple" | "orange" | "pineapple", ...("apple" | "orange" | "pineapple")[]];
		readonly horrible?: readonly ["banana" | "peach", ...("banana" | "peach")[]];
	},
	"strict"
>;
