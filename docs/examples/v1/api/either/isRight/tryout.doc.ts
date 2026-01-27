import { E, type ExpectType } from "@duplojs/utils";

const result = true
	? E.ok()
	: E.fail();

if (E.isRight(result)) {
	type check = ExpectType<
		typeof result,
		E.Ok,
		"strict"
	>;
}

