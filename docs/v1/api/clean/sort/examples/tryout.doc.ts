import { type ExpectType, C } from "@duplojs/utils";

const input = [
	C.Number.createOrThrow(3),
	1,
	2,
] as const;

const result = C.sort(input, "ASC");

type check = ExpectType<
	typeof result,
	C.Primitive<number>[],
	"strict"
>;
