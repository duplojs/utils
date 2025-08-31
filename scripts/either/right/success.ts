import { createRight, type EitherRight } from "./create";
import { type Kind } from "@scripts/common/kind";

export interface EitherSuccess<
	GenericValue extends unknown = unknown,
> extends EitherRight<"success", GenericValue>,
	Kind<"either-success"> {

}

export function createSuccess<
	const GenericValue extends unknown,
>(
	value: GenericValue,
): EitherSuccess<GenericValue> {
	return {
		"kind-either-success": null,
		...createRight("success", value),
	};
}
