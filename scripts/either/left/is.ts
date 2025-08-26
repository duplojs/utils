import { type EitherLeft } from "./create";
import { hasKind } from "@scripts/common/kind";
import { isWrappedValue } from "@scripts/common/wrapValue";
import { type EitherRight } from "../right";

export function isEitherLeft<
	GenericInput extends EitherRight | EitherLeft,
>(
	input: GenericInput,
): input is Extract<GenericInput, EitherLeft>;
export function isEitherLeft(
	input: unknown,
): input is EitherLeft;
export function isEitherLeft(input: unknown): boolean {
	return hasKind(input, "either-left")
		&& hasKind(input, "either-information")
		&& isWrappedValue(input);
}
