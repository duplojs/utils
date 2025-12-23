import { type ExpectType, C } from "@duplojs/utils";

const input = C.String.createOrThrow("Hello");

const result = C.concat(input, " ", "world");

type check = ExpectType<
	typeof result,
	C.String,
	"strict"
>;
