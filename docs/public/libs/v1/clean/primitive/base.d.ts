import { type Kind, type WrappedValue } from "../../common";
import * as DDataParser from "../../dataParser";
import * as DEither from "../../either";
export type EligiblePrimitive = string | number | boolean | bigint;
export interface Primitive<GenericValue extends EligiblePrimitive> extends WrappedValue<GenericValue> {
}
export declare const primitiveHandlerKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsClean/primitive-handler", unknown>>;
export interface PrimitiveHandler<GenericValue extends EligiblePrimitive = EligiblePrimitive> extends Kind<typeof primitiveHandlerKind.definition> {
    readonly dataParser: DDataParser.Contract<GenericValue>;
    create<GenericData extends GenericValue>(data: GenericData): (DEither.EitherRight<"createNewType", Primitive<GenericData>> | DEither.EitherLeft<"createNewTypeError", DDataParser.DataParserError>);
    createOrThrow<GenericData extends GenericValue>(data: GenericData): Primitive<GenericData>;
    createWithUnknown<GenericData extends unknown>(data: GenericData): (DEither.EitherRight<"createNewType", Primitive<GenericValue>> | DEither.EitherLeft<"createNewTypeError", DDataParser.DataParserError>);
    createWithUnknownOrThrow<GenericData extends unknown>(data: GenericData): Primitive<GenericValue>;
    is<GenericInput extends WrappedValue>(input: GenericInput): input is Extract<GenericInput, Primitive<GenericValue>>;
}
declare const CreatePrimitiveError_base: new (params: {
    "@DuplojsUtilsError/create-primitive-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("../../common").KindDefinition<"create-primitive-error", unknown>, unknown> & Kind<import("../../common").KindDefinition<"@DuplojsUtilsError/create-primitive-error", unknown>, unknown>;
export declare class CreatePrimitiveError extends CreatePrimitiveError_base {
    data: unknown;
    dataParserError: DDataParser.DataParserError;
    constructor(data: unknown, dataParserError: DDataParser.DataParserError);
}
/**
 * Business primitive for string values.
 * 
 * **Supported call styles:**
 * - Classic: `String.create(value)` -> returns Either
 * 
 * Use it to avoid raw strings in the domain and to share a common base type across NewTypes.
 * 
 * Business primitives are an alternative to raw TypeScript strings and numbers.
 * Instead of manipulating bare values, each primitive is wrapped in a container.
 * Result: safer, more explicit data, better aligned with the domain.
 * 
 * ```ts
 * const result = C.String.create("hello");
 * 
 * if (E.isRight(result)) {
 * 	// result: E.EitherRight<"createNewType", C.Primitive<"hello">>
 * }
 * 
 * const value = C.String.createOrThrow("world");
 * // value: C.Primitive<"world">
 * 
 * C.String.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives
 * 
 * @namespace C
 * 
 */
export declare const String: PrimitiveHandler<string>;
export type String = ReturnType<typeof String["createWithUnknownOrThrow"]>;
/**
 * Business primitive for number values.
 * 
 * **Supported call styles:**
 * - Classic: `Number.create(value)` -> returns Either
 * 
 * Use it to avoid raw numbers in the domain and to share a common base type across NewTypes.
 * 
 * Business primitives are an alternative to raw TypeScript strings and numbers.
 * Instead of manipulating bare values, each primitive is wrapped in a container.
 * Result: safer, more explicit data, better aligned with the domain.
 * 
 * ```ts
 * const result = C.Number.create(42);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.EitherRight<"createNewType", C.Primitive<42>>
 * }
 * 
 * const value = C.Number.createOrThrow(7);
 * // value: C.Primitive<7>
 * 
 * C.Number.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives
 * 
 * @namespace C
 * 
 */
export declare const Number: PrimitiveHandler<number>;
export type Number = ReturnType<typeof Number["createWithUnknownOrThrow"]>;
/**
 * Business primitive for bigint values.
 * 
 * **Supported call styles:**
 * - Classic: `BigInt.create(value)` -> returns Either
 * 
 * Use it to avoid raw bigint values in the domain and to share a common base type across NewTypes.
 * 
 * Business primitives are an alternative to raw TypeScript strings and numbers.
 * Instead of manipulating bare values, each primitive is wrapped in a container.
 * Result: safer, more explicit data, better aligned with the domain.
 * 
 * ```ts
 * const result = C.BigInt.create(10n);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.EitherRight<"createNewType", C.Primitive<10n>>
 * }
 * 
 * const value = C.BigInt.createOrThrow(99n);
 * // value: C.Primitive<99n>
 * 
 * C.BigInt.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives
 * 
 * @namespace C
 * 
 */
export declare const BigInt: PrimitiveHandler<bigint>;
export type BigInt = ReturnType<typeof BigInt["createWithUnknownOrThrow"]>;
/**
 * Business primitive for boolean values.
 * 
 * **Supported call styles:**
 * - Classic: `Boolean.create(value)` -> returns Either
 * 
 * Use it to avoid raw booleans in the domain and to share a common base type across NewTypes.
 * 
 * Business primitives are an alternative to raw TypeScript strings and numbers.
 * Instead of manipulating bare values, each primitive is wrapped in a container.
 * Result: safer, more explicit data, better aligned with the domain.
 * 
 * ```ts
 * const result = C.Boolean.create(true);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.EitherRight<"createNewType", C.Primitive<true>>
 * }
 * 
 * const value = C.Boolean.createOrThrow(false);
 * // value: C.Primitive<false>
 * 
 * C.Boolean.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives
 * 
 * @namespace C
 * 
 */
export declare const Boolean: PrimitiveHandler<boolean>;
export type Boolean = ReturnType<typeof Boolean["createWithUnknownOrThrow"]>;
/**
 * Business primitive for date values (TheDate).
 * 
 * **Supported call styles:**
 * - Classic: `Date.create(value)` -> returns Either
 * 
 * Use it to avoid raw dates in the domain and to keep date operations typed and consistent.
 * 
 * Business primitives are an alternative to raw TypeScript strings and numbers.
 * Instead of manipulating bare values, each primitive is wrapped in a container.
 * Result: safer, more explicit data, better aligned with the domain.
 * 
 * ```ts
 * const date = D.create("2024-01-01");
 * 
 * const result = C.Date.create(date);
 * 
 * if (E.isRight(result)) {
 * // result: E.EitherRight<"createNewType", C.Primitive<D.TheDate>>
 * }
 * 
 * const value = C.Date.createOrThrow(date);
 * // value: C.Primitive<D.TheDate>
 * 
 * C.Date.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives
 * 
 * @namespace C
 * 
 */
export declare const Date: PrimitiveHandler<`date${number}-` | `date${number}+`>;
export type Date = ReturnType<typeof Date["createWithUnknownOrThrow"]>;
/**
 * Business primitive for time values (TheTime).
 * 
 * **Supported call styles:**
 * - Classic: `Time.create(value)` -> returns Either
 * 
 * Use it to avoid raw durations in the domain and to keep time operations typed and consistent.
 * 
 * Business primitives are an alternative to raw TypeScript strings and numbers.
 * Instead of manipulating bare values, each primitive is wrapped in a container.
 * Result: safer, more explicit data, better aligned with the domain.
 * 
 * ```ts
 * const theTime = D.createTheTime(3_600_000);
 * 
 * const result = C.Time.create(theTime);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.EitherRight<"createNewType", C.Primitive<D.TheTime>>
 * }
 * 
 * const value = C.Time.createOrThrow(theTime);
 * // value: C.Primitive<D.TheTime>
 * 
 * C.Time.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives
 * 
 * @namespace C
 * 
 */
export declare const Time: PrimitiveHandler<`time${number}-` | `time${number}+`>;
export type Time = ReturnType<typeof Time["createWithUnknownOrThrow"]>;
export type Primitives = (String | Number | BigInt | Boolean | Date | Time);
export type PrimitiveHandlers = (typeof String | typeof Number | typeof BigInt | typeof Boolean | typeof Date | typeof Time);
export {};
