import { type ExpectType, C } from "@duplojs/utils";

const value = C.Number.createOrThrow(10);

const result = C.divide(value, 2);
// 5

type check = ExpectType<
	typeof result,
	C.Number,
	"strict"
>;
