import { E, type ExpectType } from "@duplojs/utils";

const maybeInput = E.bool(true ? true : null);

if (E.isBoolFalsy(maybeInput)) {
	type check = ExpectType<
		typeof maybeInput,
		E.BoolFalsy<null>,
		"strict"
	>;
}
