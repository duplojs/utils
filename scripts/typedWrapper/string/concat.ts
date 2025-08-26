import { unwrap } from "@scripts/common";
import { createWrappedString, type WrappedString } from "./create";

export function concat<
	GenericValue1 extends WrappedString,
	GenericValue2 extends WrappedString,
>(
	value1: GenericValue1,
	value2: GenericValue2,
) {
	return createWrappedString(
		`${unwrap(value1)}${unwrap(value2)}`,
	);
}
