import { type ExpectType, C } from "@duplojs/utils";

const value = C.Number.createOrThrow(10 as number);

if (C.equal(value, 10)) {
	type check = ExpectType<
		typeof value,
		C.Primitive<number> & C.Primitive<10>,
		"strict"
	>;
}
