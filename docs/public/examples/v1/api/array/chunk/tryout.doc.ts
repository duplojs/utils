import { A, type ExpectType } from "@duplojs/utils";

const input = ["a", "b", "c", "d", "e"] as const;

const result = A.chunk(input, 2);

type check = ExpectType<
	typeof result,
	(readonly ["a", "b", "c", "d", "e"])[],
	"strict"
>;
