import { E, type ExpectType } from "@duplojs/utils";

const maybeValue = E.nullish(true ? "value" : null);

if (E.isNullishFilled(maybeValue)) {
	type check = ExpectType<
		typeof maybeValue,
		E.EitherNullishFilled<"value">,
		"strict"
	>;
}
