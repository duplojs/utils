import { type ExpectType, C } from "@duplojs/utils";

const input = C.String.createOrThrow("abc");

const result = C.length(input);

type check = ExpectType<
	typeof result,
	C.Number,
	"strict"
>;
