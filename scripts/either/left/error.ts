import { type Kind } from "@scripts/common/kind";
import { createLeft, type EitherLeft } from "./create";

export interface EitherError<
	GenericValue extends unknown = unknown,
> extends EitherLeft<"error", GenericValue>,
	Kind<"either-error"> {

}

export function createError<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherError<GenericValue> {
	return {
		"kind-either-error": null,
		...createLeft("error", value),
	};
}
