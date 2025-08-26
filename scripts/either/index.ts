import { createEitherError, createEitherFail, createEitherLeft, type EitherError, type EitherFail, type EitherLeft, isEitherLeft, whenEitherIsLeft } from "./left";
import { createEitherRight, type EitherRight, isEitherRight, eitherRightPipe, whenEitherIsRight, createEitherSuccess, type EitherSuccess, type EitherOk, createEitherOk, eitherRightAsyncPipe } from "./right";
import { createEitherOptional, type EitherOptionalEmpty, type EitherOptionalFilled, isEitherOptionalEmpty, isEitherOptionalFilled, whenEitherIsOptionalEmpty, whenEitherIsOptionalFilled } from "./optional";
import { createEitherNullable, type EitherNullableEmpty, type EitherNullableFilled, isEitherNullableEmpty, isEitherNullableFilled, whenEitherIsNullableEmpty, whenEitherIsNullableFilled } from "./nullable";
import { createFutureEither, type FutureEither } from "./future";
import { createEitherNullish, type EitherNullishEmpty, type EitherNullishFilled, isEitherNullishEmpty, isEitherNullishFilled, whenEitherIsNullishEmpty, whenEitherIsNullishFilled } from "./nullish";
import { createEitherBool, type EitherBoolFalsy, type EitherBoolTruthy, isEitherBoolFalsy, isEitherBoolTruthy, whenEitherIsBoolFalsy, whenEitherIsBoolTruthy } from "./bool";
import { type AnyValue } from "@scripts/common/types/anyValue";
import { eitherHasInformation } from "./hasInformation";
import { whenEitherHasInformation } from "./whenHasInformation";

export * from "./bool";
export * from "./future";
export * from "./left";
export * from "./nullable";
export * from "./nullish";
export * from "./optional";
export * from "./right";
export * from "./hasInformation";
export * from "./whenHasInformation";

export namespace DEither {
	export type Right<
		GenericInformation extends string = string,
		GenericValue extends unknown = unknown,
	> = EitherRight<GenericInformation, GenericValue>;

	export const right = createEitherRight;

	export type Success<
		GenericValue extends unknown = unknown,
	> = EitherSuccess<GenericValue>;

	export const success = createEitherSuccess;

	export type Ok = EitherOk;

	export const ok = createEitherOk;

	export const isRight = isEitherRight;

	export const rightPipe = eitherRightPipe;

	export const rightAsyncPipe = eitherRightAsyncPipe;

	export const whenIsRight = whenEitherIsRight;

	export type Left<
		GenericInformation extends string = string,
		GenericValue extends unknown = unknown,
	> = EitherLeft<GenericInformation, GenericValue>;

	export const left = createEitherLeft;

	export type Error<
		GenericValue extends unknown = unknown,
	> = EitherError<GenericValue>;

	export const error = createEitherError;

	export type Fail = EitherFail;

	export const fail = createEitherFail;

	export const isLeft = isEitherLeft;

	export const whenIsLeft = whenEitherIsLeft;

	export type Optional<
		GenericValue extends unknown = unknown,
	> =
		| EitherOptionalFilled<GenericValue>
		| EitherOptionalEmpty;

	export const optional = createEitherOptional;

	export const isOptionalFilled = isEitherOptionalFilled;

	export const whenIsOptionalFilled = whenEitherIsOptionalFilled;

	export const isOptionalEmpty = isEitherOptionalEmpty;

	export const whenIsOptionalEmpty = whenEitherIsOptionalEmpty;

	export type Nullable<
		GenericValue extends unknown = unknown,
	> =
		| EitherNullableFilled<GenericValue>
		| EitherNullableEmpty;

	export const nullable = createEitherNullable;

	export const isNullableFilled = isEitherNullableFilled;

	export const whenIsNullableFilled = whenEitherIsNullableFilled;

	export const isNullableEmpty = isEitherNullableEmpty;

	export const whenIsNullableEmpty = whenEitherIsNullableEmpty;

	export type Future<
		GenericValue extends AnyValue = AnyValue,
	> = FutureEither<GenericValue>;

	export const future = createFutureEither;

	export type Nullish<
		GenericValue extends unknown = unknown,
	> =
		| EitherNullishFilled<GenericValue>
		| EitherNullishEmpty;

	export const nullish = createEitherNullish;

	export const isNullishFilled = isEitherNullishFilled;

	export const whenIsNullishFilled = whenEitherIsNullishFilled;

	export const isNullishEmpty = isEitherNullishEmpty;

	export const whenIsNullishEmpty = whenEitherIsNullishEmpty;

	export type Bool<
		GenericValue extends unknown = unknown,
	> =
		| EitherBoolTruthy<GenericValue>
		| EitherBoolFalsy;

	export const bool = createEitherBool;

	export const isBoolTruthy = isEitherBoolTruthy;

	export const whenIsBoolTruthy = whenEitherIsBoolTruthy;

	export const isBoolFalsy = isEitherBoolFalsy;

	export const whenIsBoolFalsy = whenEitherIsBoolFalsy;

	export const hasInformation = eitherHasInformation;

	export const whenHasInformation = whenEitherHasInformation;
}

// eslint-disable-next-line id-length
export const E = DEither;
