import { createWrappedKind } from "./createKind";
import { addWrappedProperties } from "./addProperties";
import { toWrappedValue } from "./to";
import { type WrappedAnyValue } from "./types/anyValue";
import { type WrappedBigint } from "./types/bigint";
import { type WrappedBoolean } from "./types/boolean";
import { type MaybeWrapped } from "./types/maybe";
import { type WrappedNumber } from "./types/number";
import { type WrappedObject } from "./types/object";
import { type WrappedString } from "./types/string";
import { createWrappedNumber } from "./create/number";

export * from "./createKind";
export * from "./addProperties";
export * from "./to";

export namespace WrappedValue {
	export type Any = WrappedAnyValue;

	export type Bigint<
		GenericBigint extends bigint = bigint,
	> = WrappedBigint<GenericBigint>;

	export type Boolean<
		GenericBoolean extends boolean = boolean,
	> = WrappedBoolean<GenericBoolean>;

	export type Maybe<
		GenericInnerValue extends WrappedAnyValue["value"],
	> = MaybeWrapped<GenericInnerValue>;

	export type Number<
		GenericNumber extends number = number,
	> = WrappedNumber<GenericNumber>;

	export const number = createWrappedNumber;

	export type Object<
		GenericObject extends object = object,
	> = WrappedObject<GenericObject>;

	export type String<
		GenericString extends string = string,
	> = WrappedString<GenericString>;

	export const createKind = createWrappedKind;

	export const addProperties = addWrappedProperties;

	export const to = toWrappedValue;
}

export const WV = WrappedValue;
