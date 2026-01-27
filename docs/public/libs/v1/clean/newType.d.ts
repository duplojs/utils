import { type Kind, type WrappedValue, type Unwrap, type NeverCoalescing, type DeepReadonly } from "..";
import { constrainedTypeKind, type ConstraintHandler } from "./constraint";
import { type Primitive, type EligiblePrimitive } from "./primitive";
import * as DEither from "../either";
import * as DArray from "../array";
import type * as DDataParser from "../dataParser";
import { type DataParserContainTransform } from "./types";
export declare const newTypeKind: import("..").KindHandler<import("..").KindDefinition<"@DuplojsUtilsClean/new-type", string>>;
type _NewType<GenericName extends string, GenericValue extends unknown, GenericConstrainName extends string> = (Kind<typeof newTypeKind.definition, GenericName> & Kind<typeof constrainedTypeKind.definition, Record<GenericConstrainName, unknown>> & WrappedValue<GenericValue>);
export interface NewType<GenericName extends string = string, GenericValue extends unknown = unknown, GenericConstrainName extends string = never> extends _NewType<GenericName, GenericValue, GenericConstrainName> {
}
export declare const newTypeHandlerKind: import("..").KindHandler<import("..").KindDefinition<"@DuplojsUtilsClean/new-type-handler", unknown>>;
export interface NewTypeHandler<GenericName extends string = string, GenericValue extends unknown = unknown, GenericConstrainHandler extends readonly ConstraintHandler[] = readonly []> extends Kind<typeof newTypeHandlerKind.definition> {
    /**
     * The NewType name used as the brand (for example "userId").
     * 
     */
    readonly name: GenericName;
    /**
     * The DataParser used to validate and transform raw inputs.
     * 
     */
    readonly dataParser: DDataParser.Contract<GenericValue>;
    /**
     * The list of constraints applied to this NewType.
     * 
     */
    readonly constrains: GenericConstrainHandler;
    /**
     * Creates a NewType value and returns an Either.
     * 
     * ```ts
     * const result = UserId.create(12);
     * ```
     * 
     */
    create<const GenericData extends GenericValue>(data: GenericData): (DEither.Right<"createNewType", NewType<GenericName, GenericData, GenericConstrainHandler[number]["name"]>> | DEither.Left<"createNewTypeError", DDataParser.DataParserError>);
    create<GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>>(data: GenericPrimitive): (DEither.Right<"createNewType", (GenericPrimitive & NewType<GenericName, Unwrap<GenericPrimitive>, GenericConstrainHandler[number]["name"]>)> | DEither.Left<"createNewTypeError", DDataParser.DataParserError>);
    /**
     * Creates a NewType value and throws on error. Works with raw values or primitives.
     * 
     * ```ts
     * const userId = UserId.createOrThrow(42);
     * 
     * const result = UserId.create(12);
     * 
     * const fromPrimitive = UserId.createOrThrow(
     * 	C.Number.createOrThrow(5),
     * );
     * ```
     * 
     */
    createOrThrow<const GenericData extends GenericValue>(data: GenericData): NewType<GenericName, GenericData, GenericConstrainHandler[number]["name"]>;
    createOrThrow<GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>>(data: GenericPrimitive): (GenericPrimitive & NewType<GenericName, Unwrap<GenericPrimitive>, GenericConstrainHandler[number]["name"]>);
    /**
     * Creates a NewType value from an unknown input and returns an Either.
     * 
     * ```ts
     * const unknownValue: unknown = 20;
     * const maybe = UserId.createWithUnknown(unknownValue);
     * 
     * if (E.isRight(maybe)) {
     * 	// maybe: E.Right<"createNewType", UserId>
     * }
     * ```
     * 
     */
    createWithUnknown<GenericData extends unknown>(data: GenericData): (DEither.Right<"createNewType", NewType<GenericName, GenericValue, GenericConstrainHandler[number]["name"]>> | DEither.Left<"createNewTypeError", DDataParser.DataParserError>);
    /**
     * Creates a NewType value from an unknown input and throws on error.
     * 
     * ```ts
     * const strictValue = UserId.createWithUnknownOrThrow(unknownValue);
     * ```
     * 
     */
    createWithUnknownOrThrow<GenericData extends unknown>(data: GenericData): NewType<GenericName, GenericValue, GenericConstrainHandler[number]["name"]>;
    /**
     * Checks if a value is a NewType of this handler (type guard).
     * 
     * ```ts
     * UserId.is(result); // type guard
     * ```
     * 
     */
    is<GenericInput extends WrappedValue>(input: GenericInput): input is Extract<GenericInput, NewType<GenericName, GenericValue, GenericConstrainHandler[number]["name"]>>;
}
declare const CreateNewTypeError_base: new (params: {
    "@DuplojsUtilsError/create-new-type-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("..").KindDefinition<"create-new-type-error", unknown>, unknown> & Kind<import("..").KindDefinition<"@DuplojsUtilsError/create-new-type-error", unknown>, unknown>;
export declare class CreateNewTypeError extends CreateNewTypeError_base {
    newTypeName: string;
    data: unknown;
    dataParserError: DDataParser.DataParserError;
    constructor(newTypeName: string, data: unknown, dataParserError: DDataParser.DataParserError);
}
/**
 * Creates a NewType handler for a domain-specific value.
 * 
 * **Supported call styles:**
 * - Classic: `createNewType(name, dataParser, constraints?)` -> returns a handler
 * 
 * A NewType validates input with a DataParser, applies optional constraints, and brands the value to prevent accidental mix-ups across the domain.
 * 
 * ```ts
 * const UserId = C.createNewType(
 * 	"user-id",
 * 	DP.number(),
 * 	C.Positive,
 * );
 * 
 * type UserId = C.GetNewType<typeof UserId>;
 * 
 * const userId = UserId.createOrThrow(42);
 * 
 * const result = UserId.create(12);
 * 
 * const fromPrimitive = UserId.createOrThrow(
 * 	C.Number.createOrThrow(5),
 * );
 * 
 * UserId.is(result); // type guard
 * 
 * const unknownValue: unknown = 20;
 * const maybe = UserId.createWithUnknown(unknownValue);
 * 
 * if (E.isRight(maybe)) {
 * 	// maybe: E.Right<"createNewType", UserId>
 * }
 * 
 * const strictValue = UserId.createWithUnknownOrThrow(unknownValue);
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/newType
 * 
 * @namespace C
 * 
 */
export declare function createNewType<GenericName extends string, GenericDataParser extends DDataParser.DataParser, const GenericConstrainHandler extends (ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, DDataParser.Output<GenericDataParser>>[]> | readonly [
    ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, DDataParser.Output<GenericDataParser>>[]>,
    ...ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, DDataParser.Output<GenericDataParser>>[]>[]
]) = never>(name: GenericName, dataParser: GenericDataParser & DataParserContainTransform<GenericDataParser>, constraint?: GenericConstrainHandler): NewTypeHandler<GenericName, DeepReadonly<DDataParser.Output<GenericDataParser>>, DArray.ArrayCoalescing<NeverCoalescing<GenericConstrainHandler, readonly []>>>;
export type GetNewType<GenericHandler extends NewTypeHandler<string, unknown, readonly any[]>> = Extract<GenericHandler extends any ? NewType<GenericHandler["name"], DDataParser.Output<GenericHandler["dataParser"]>, GenericHandler["constrains"][number]["name"]> : never, any>;
export {};
