import { createWrappedKind } from "../common/createWrappedKind";
import { addWrappedProperties } from "../common/addWrappedProperties";
import { type WrappedAnyValue } from "./types/anyValue";
import { type WrappedBigint } from "./bigint/create";
import { type WrappedBoolean } from "./boolean/create";
import { type WrappedNumber } from "./number/create";
import { type WrappedObject } from "./object/create";
import { type WrappedString } from "./string/create";

export * from "../common/createWrappedKind";
export * from "../common/addWrappedProperties";

export namespace DTypedWrapper {
	export type Any = WrappedAnyValue;

	export type Bigint<
		GenericBigint extends bigint = bigint,
	> = WrappedBigint<GenericBigint>;

	export type Boolean<
		GenericBoolean extends boolean = boolean,
	> = WrappedBoolean<GenericBoolean>;

	export type Number<
		GenericNumber extends number = number,
	> = WrappedNumber<GenericNumber>;

	export type Object<
		GenericObject extends object = object,
	> = WrappedObject<GenericObject>;

	export type String<
		GenericString extends string = string,
	> = WrappedString<GenericString>;

	export const createKind = createWrappedKind;

	export const addProperties = addWrappedProperties;
}

export const TW = DTypedWrapper;
