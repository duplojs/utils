import { type Kind } from "@scripts/common/kind";
import { left, type EitherLeft } from "./create";

export interface EitherError<
	GenericValue extends unknown = unknown,
> extends EitherLeft<"error", GenericValue>,
	Kind<"either-error"> {

}

export function error<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherError<GenericValue> {
	return {
		"kind-either-error": null,
		...left("error", value),
	};
}
