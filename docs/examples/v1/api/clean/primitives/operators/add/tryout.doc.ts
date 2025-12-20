import { type ExpectType, C } from "@duplojs/utils";

const value = C.Number.createOrThrow(10);

const result = C.add(value, 5);
// 15

type check = ExpectType<
	typeof result,
	C.Number,
	"strict"
>;
