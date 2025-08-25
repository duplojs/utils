import { theKind, type TheKind } from "@scripts/common/theKind";
import { type WrappedAnyValue } from "./types/anyValue";
import { type TheValue } from "@scripts/common/theValue";
import { type Unwrap } from "@scripts/common/unwrap";

export interface CreateWrappedKindConstrainResult<
	GenericValue extends unknown = unknown,
> extends TheKind<"create-wrapped-kind-constrain-result">,
	TheValue<GenericValue> {

}

export function createWrappedKind<
	GenericKind extends string,
	GenericConstrainWrappedValue extends CreateWrappedKindConstrainResult<WrappedAnyValue>,
>(
	kind: GenericKind,
	_constrain?: GenericConstrainWrappedValue,
) {
	return <
		GenericWrappedValue extends Unwrap<GenericConstrainWrappedValue>,
	>(
		wrappedValue: GenericWrappedValue,
	): GenericWrappedValue & TheKind<GenericKind> => ({
		...wrappedValue,
		...theKind(kind),
	});
}

createWrappedKind.constrain = function<
	GenericWrappedValue extends WrappedAnyValue,
>(): CreateWrappedKindConstrainResult<GenericWrappedValue> {
	return void 0 as never;
};
