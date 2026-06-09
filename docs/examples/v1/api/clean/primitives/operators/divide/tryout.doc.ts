import { type ExpectType, C } from "@duplojs/utils";

const value = C.Number.createOrThrow(10);
const divisor = C.NotZero.createOrThrow(2);

const result = C.divide(value, divisor);
// 5

type check = ExpectType<
	typeof result,
	C.Number,
	"strict"
>;
