import { type ExpectType, C } from "@duplojs/utils";

const values = [C.Number.createOrThrow(10), 3, 7] as const;

const result = C.max(values);
// 10

type check = ExpectType<
	typeof result,
	C.Number,
	"strict"
>;
