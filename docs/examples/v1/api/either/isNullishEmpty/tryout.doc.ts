import { E, type ExpectType } from "@duplojs/utils";

const maybeValue = E.nullish(true ? "value" : null);

if (E.isNullishEmpty(maybeValue)) {
	type check = ExpectType<
		typeof maybeValue,
		E.NullishEmpty<null>,
		"strict"
	>;
}
