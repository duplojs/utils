import { type TheKind, theKind } from "@scripts/common/theKind";
import { theValue, type TheValue } from "@scripts/common/theValue";
import { type Unwrap } from "@scripts/common/unwrap";
import { type WrappedAnyValue } from "@scripts/wrappedValue/types/anyValue";

export interface CreateNewTypeConstrainResult<
	GenericValue extends unknown = unknown,
> extends TheKind<"create-new-type-wrapped-constrain-result">,
	TheValue<GenericValue> {

}

export interface NewType<
	GenericName extends string,
	GenericInnerValue extends WrappedAnyValue["value"],
> extends TheKind<"new-type", GenericName>,
	TheValue<GenericInnerValue> {

}

export function createNewType<
	GenericName extends string,
	GenericConstrainInnerValue extends CreateNewTypeConstrainResult<WrappedAnyValue["value"]>,
>(
	name: GenericName,
	_constrain: GenericConstrainInnerValue,
) {
	return <
		GenericInnerValue extends Unwrap<GenericConstrainInnerValue>,
	>(value: GenericInnerValue): NewType<GenericName, GenericInnerValue> => ({
		...theKind("new-type", name),
		...theValue(value),
	});
}

createNewType.constrain = function<
	GenericWrappedValue extends WrappedAnyValue["value"],
>(): CreateNewTypeConstrainResult<GenericWrappedValue> {
	return void 0 as never;
};
