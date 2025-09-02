import { right, type EitherRight } from "./create";
import { type Kind } from "@scripts/common/kind";

export interface EitherSuccess<
	GenericValue extends unknown = unknown,
> extends EitherRight<"success", GenericValue>,
	Kind<"either-success"> {

}

export function success<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherSuccess<GenericValue> {
	return {
		"kind-either-success": null,
		...right("success", value),
	};
}
