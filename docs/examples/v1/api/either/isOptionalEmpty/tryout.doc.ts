import { E, type ExpectType } from "@duplojs/utils";

const maybeValue = E.optional(true ? "value" : undefined);

if (E.isOptionalEmpty(maybeValue)) {
	type check = ExpectType<
		typeof maybeValue,
		E.EitherOptionalEmpty,
		"strict"
	>;
}
