import { E, type ExpectType } from "@duplojs/utils";

const maybeValue = E.nullable(true ? "value" : null);

if (E.isNullableEmpty(maybeValue)) {
	type check = ExpectType<
		typeof maybeValue,
		E.NullableEmpty,
		"strict"
	>;
}
