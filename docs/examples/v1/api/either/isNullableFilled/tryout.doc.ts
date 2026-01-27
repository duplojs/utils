import { E, type ExpectType } from "@duplojs/utils";

const maybeValue = E.nullable(true ? "value" : null);

if (E.isNullableFilled(maybeValue)) {
	type check = ExpectType<
		typeof maybeValue,
		E.NullableFilled<"value">,
		"strict"
	>;
}
