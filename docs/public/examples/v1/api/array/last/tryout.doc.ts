import { A, type ExpectType } from "@duplojs/utils";

const input = ["hello", 42, true] as const;

const result = A.last(input);

type check = ExpectType<
	typeof result,
	true,
	"strict"
>;
