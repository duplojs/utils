import { leftKind, type Left } from "./create";
import { isWrappedValue } from "@scripts/common/wrapValue";
import { informationKind } from "../kind";

/**
 * {@include either/isLeft/index.md}
 */
export function isLeft<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, Left> {
	return leftKind.has(input)
		&& informationKind.has(input)
		&& isWrappedValue(input);
}
