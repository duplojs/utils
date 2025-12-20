import { type ExpectType, C } from "@duplojs/utils";

const value = C.Number.createOrThrow(10);

const result = C.multiply(value, 2);
// 20

type check = ExpectType<
	typeof result,
	C.Number,
	"strict"
>;
