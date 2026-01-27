import { E, type ExpectType } from "@duplojs/utils";

const result = false
	? E.ok()
	: E.fail();

if (E.isLeft(result)) {
	type check = ExpectType<
		typeof result,
		E.Fail,
		"strict"
	>;
}
