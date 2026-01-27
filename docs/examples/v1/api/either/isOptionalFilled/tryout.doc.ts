import { E, type ExpectType } from "@duplojs/utils";

const maybeValue = E.optional(true ? "value" : undefined);

if (E.isOptionalFilled(maybeValue)) {
	type check = ExpectType<
		typeof maybeValue,
		E.OptionalFilled<"value">,
		"strict"
	>;
}
