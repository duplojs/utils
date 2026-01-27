import { informationKind } from "../kind";
import { rightKind, type Right } from "./create";
import { isWrappedValue } from "@scripts/common/wrapValue";

/**
 * {@include either/isRight/index.md}
 */
export function isRight<
	GenericInput extends unknown,
>(
	input: GenericInput,
): input is Extract<GenericInput, Right> {
	return rightKind.has(input)
		&& informationKind.has(input)
		&& isWrappedValue(input);
}
