import { type Unwrap, type Kind, type WrappedValue } from "../..";
import { type Primitive, type EligiblePrimitive, type PrimitiveHandler } from "../primitive";
import * as DArray from "../../array";
import * as DEither from "../../either";
import type * as DDataParser from "../../dataParser";
export declare const constrainedTypeKind: import("../..").KindHandler<import("../..").KindDefinition<"@DuplojsUtilsClean/constrained-type", Record<string, unknown>>>;
export interface ConstrainedType<GenericName extends string, GenericValue extends unknown> extends Kind<typeof constrainedTypeKind.definition, Record<GenericName, unknown>>, WrappedValue<GenericValue> {
}
export declare const constraintHandlerKind: import("../..").KindHandler<import("../..").KindDefinition<"@DuplojsUtilsClean/constraint-handler", unknown>>;
export interface ConstraintHandler<GenericName extends string = string, GenericPrimitiveValue extends EligiblePrimitive = EligiblePrimitive, GenericCheckers extends readonly DDataParser.DataParserChecker[] = readonly DDataParser.DataParserChecker[], GenericPrimitiveInput extends unknown = unknown> extends Kind<typeof constraintHandlerKind.definition> {
    /**
     * The constraint name used as the internal marker (for example "email").
     * 
     */
    readonly name: GenericName;
    /**
     * The list of DataParser checkers used to validate the primitive.
     * 
     */
    readonly checkers: GenericCheckers;
    /**
     * The primitive handler on which the constraint applies (String, Number, etc.).
     * 
     */
    readonly primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>;
    /**
     * Creates a constrained value and returns an Either.
     * 
     * ```ts
     * const result = Between1And10.create(5);
     * 
     * if (E.isRight(result)) {
     * 	// result : E.Right<"createConstrainedType", C.ConstrainedType<"between-1-10", 5>>
     * }
     * ```
     * 
     */
    create<GenericData extends GenericPrimitiveValue>(data: GenericData): (DEither.Right<"createConstrainedType", ConstrainedType<GenericName, GenericData>> | DEither.Left<"createConstrainedTypeError", DDataParser.DataParserError>);
    create(data: GenericPrimitiveInput): (DEither.Right<"createConstrainedType", ConstrainedType<GenericName, GenericPrimitiveValue>> | DEither.Left<"createConstrainedTypeError", DDataParser.DataParserError>);
    create<GenericPrimitive extends Primitive<GenericPrimitiveValue>>(data: GenericPrimitive): (DEither.Right<"createConstrainedType", (GenericPrimitive & ConstrainedType<GenericName, Unwrap<GenericPrimitive>>)> | DEither.Left<"createConstrainedTypeError", DDataParser.DataParserError>);
    /**
     * Creates a constrained value and throws on error.
     * 
     * ```ts
     * const value = Between1And10.createOrThrow(7);
     * // value: C.ConstrainedType<"between-1-10", 7>
     * ```
     * 
     */
    createOrThrow<GenericData extends GenericPrimitiveValue>(data: GenericData): ConstrainedType<GenericName, GenericData>;
    createOrThrow(data: GenericPrimitiveInput): ConstrainedType<GenericName, GenericPrimitiveValue>;
    createOrThrow<GenericPrimitive extends Primitive<GenericPrimitiveValue>>(data: GenericPrimitive): (GenericPrimitive & ConstrainedType<GenericName, Unwrap<GenericPrimitive>>);
    /**
     * Creates a constrained value from an unknown input and returns an Either.
     * 
     * ```ts
     * const unknownValue: unknown = 9;
     * const maybe = Between1And10.createWithUnknown(unknownValue);
     * ```
     * 
     */
    createWithUnknown<GenericData extends unknown>(data: GenericData): (DEither.Right<"createConstrainedType", ConstrainedType<GenericName, GenericPrimitiveValue>> | DEither.Left<"createConstrainedTypeError", DDataParser.DataParserError>);
    /**
     * Creates a constrained value from an unknown input and throws on error.
     * 
     * ```ts
     * const strictValue = Between1And10.createWithUnknownOrThrow(unknownValue);
     * ```
     * 
     */
    createWithUnknownOrThrow<GenericData extends unknown>(data: GenericData): ConstrainedType<GenericName, GenericPrimitiveValue>;
    /**
     * Checks if a value carries this constraint (type guard).
     * 
     * ```ts
     * Between1And10.is(value); // type guard
     * ```
     * 
     */
    is<GenericInput extends WrappedValue>(input: GenericInput): input is Extract<GenericInput, ConstrainedType<GenericName, GenericPrimitiveValue>>;
}
declare const CreateConstrainedTypeError_base: new (params: {
    "@DuplojsUtilsError/create-constrained-type-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("../..").KindDefinition<"create-constrained-type-error", unknown>, unknown> & Kind<import("../..").KindDefinition<"@DuplojsUtilsError/create-constrained-type-error", unknown>, unknown>;
export declare class CreateConstrainedTypeError extends CreateConstrainedTypeError_base {
    constrainedTypeName: string;
    data: unknown;
    dataParserError: DDataParser.DataParserError;
    constructor(constrainedTypeName: string, data: unknown, dataParserError: DDataParser.DataParserError);
}
/**
 * Creates a constraint handler to enforce a rule on a primitive.
 * 
 * **Supported call styles:**
 * - Classic: `createConstraint(name, primitive, checker)` -> returns a handler
 * 
 * Constraints cover rules that typing cannot express (format, range, custom checks). The handler validates input, tags the value with the constraint name, and can be reused as a contract or plugged into a NewType.
 * 
 * ```ts
 * const Between1And10 = C.createConstraint(
 * 	"between-1-10",
 * 	C.Number,
 * 	[
 * 		DP.checkerNumberMin(1),
 * 		DP.checkerNumberMax(10),
 * 	],
 * );
 * 
 * const result = Between1And10.create(5);
 * 
 * if (E.isRight(result)) {
 * 	// result : E.Right<"createConstrainedType", C.ConstrainedType<"between-1-10", 5>>
 * }
 * 
 * const value = Between1And10.createOrThrow(7);
 * // value: C.ConstrainedType<"between-1-10", 7>
 * 
 * const primitive = C.Number.createOrThrow(3);
 * Between1And10.create(primitive);
 * 
 * Between1And10.is(value); // type guard
 * 
 * const unknownValue: unknown = 9;
 * const maybe = Between1And10.createWithUnknown(unknownValue);
 * 
 * const strictValue = Between1And10.createWithUnknownOrThrow(unknownValue);
 * 
 * ```
 * 
 * @remarks
 * - You can pass multiple DataParser checkers by providing an array.
 * - The handler accepts both raw values and primitive values.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare function createConstraint<GenericName extends string, GenericPrimitiveValue extends EligiblePrimitive, GenericPrimitiveInput extends unknown, const GenericChecker extends (DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, GenericPrimitiveValue> | readonly [
    DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, GenericPrimitiveValue>,
    ...DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, GenericPrimitiveValue>[]
]) = never>(name: GenericName, primitiveHandler: PrimitiveHandler<GenericPrimitiveValue, GenericPrimitiveInput>, checker: GenericChecker): ConstraintHandler<GenericName, GenericPrimitiveValue, DArray.ArrayCoalescing<GenericChecker>, GenericPrimitiveInput>;
export declare namespace createConstraint {
    var overrideHandler: import("../..").OverrideHandler<ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, unknown>[], unknown>>;
}
export type GetConstraint<GenericConstrainHandler extends ConstraintHandler, GenericValue extends DDataParser.InputChecker<GenericConstrainHandler["checkers"][number]> = DDataParser.InputChecker<GenericConstrainHandler["checkers"][number]>> = Extract<ConstrainedType<GenericConstrainHandler["name"], GenericValue>, any>;
export {};
