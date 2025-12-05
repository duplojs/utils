import { A, type ExpectType } from "@duplojs/utils";

const input = [1, "hello", true] as const;

const result = A.length(input);

type check = ExpectType<
	typeof result,
	3,
	"strict"
>;
