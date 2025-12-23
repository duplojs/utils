import { type ExpectType, C } from "@duplojs/utils";

const value = C.Number.createOrThrow(10);

const result = C.subtract(value, 3);
// 7

type check = ExpectType<
	typeof result,
	C.Number,
	"strict"
>;
