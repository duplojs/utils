import { createKind, type Kind } from "@scripts/common/kind";
import { type WrappedValue } from "@scripts/common/wrapValue";
import { type Unwrap } from "@scripts/common/unwrap";
import { type AnyValue } from "./types";

export interface CreateWrappedKindConstrainResult<
	GenericValue extends unknown = unknown,
> extends Kind<"create-wrapped-kind-constrain-result">,
	WrappedValue<GenericValue> {

}

export function createWrappedKind<
	GenericKind extends string,
	GenericConstrainWrappedValue extends CreateWrappedKindConstrainResult<AnyValue>,
>(
	kind: GenericKind,
	_constrain?: GenericConstrainWrappedValue,
) {
	return <
		GenericWrappedValue extends WrappedValue<Unwrap<GenericConstrainWrappedValue>>,
	>(
		wrappedValue: GenericWrappedValue,
	): GenericWrappedValue & Kind<GenericKind> => ({
		...wrappedValue,
		...createKind(kind),
	});
}

createWrappedKind.constrain = function<
	GenericWrappedValue extends AnyValue,
>(): CreateWrappedKindConstrainResult<GenericWrappedValue> {
	return void 0 as never;
};
