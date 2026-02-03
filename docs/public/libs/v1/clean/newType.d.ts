import { type Kind, type WrappedValue, type Unwrap, type NeverCoalescing, type DeepReadonly } from "..";
import { constrainedTypeKind, type ConstraintHandler } from "./constraint";
import { type Primitive, type EligiblePrimitive } from "./primitive";
import * as DEither from "../either";
import * as DArray from "../array";
import type * as DDataParser from "../dataParser";
import { type DataParserContainTransform } from "./types";
export declare const newTypeKind: import("..").KindHandler<import("..").KindDefinition<"@DuplojsUtilsClean/new-type", string>>;
type _NewType<GenericName extends string, GenericValue extends unknown, GenericConstraintsName extends string> = (Kind<typeof newTypeKind.definition, GenericName> & Kind<typeof constrainedTypeKind.definition, Record<GenericConstraintsName, unknown>> & WrappedValue<GenericValue>);
export interface NewType<GenericName extends string = string, GenericValue extends unknown = unknown, GenericConstraintsName extends string = never> extends _NewType<GenericName, GenericValue, GenericConstraintsName> {
}
export declare const newTypeHandlerKind: import("..").KindHandler<import("..").KindDefinition<"@DuplojsUtilsClean/new-type-handler", unknown>>;
export interface NewTypeHandler<GenericName extends string = string, GenericValue extends unknown = unknown, GenericConstraintsHandler extends readonly ConstraintHandler[] = readonly []> extends Kind<typeof newTypeHandlerKind.definition> {
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
    readonly constrains: GenericConstraintsHandler;
    /**
     * Creates a NewType value and returns an Either.
     * 
     * ```ts
     * const result = UserId.create(12);
     * ```
     * 
     */
    create<const GenericInput extends GenericValue>(data: GenericInput): (DEither.Right<"createNewType", NewType<GenericName, GenericInput, GenericConstraintsHandler[number]["name"]>> | DEither.Left<"createNewTypeError", DDataParser.DataParserError>);
    create<GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>>(data: GenericPrimitive): (DEither.Right<"createNewType", (GenericPrimitive & NewType<GenericName, Unwrap<GenericPrimitive>, GenericConstraintsHandler[number]["name"]>)> | DEither.Left<"createNewTypeError", DDataParser.DataParserError>);
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
    createOrThrow<const GenericData extends GenericValue>(data: GenericData): NewType<GenericName, GenericData, GenericConstraintsHandler[number]["name"]>;
    createOrThrow<GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>>(data: GenericPrimitive): (GenericPrimitive & NewType<GenericName, Unwrap<GenericPrimitive>, GenericConstraintsHandler[number]["name"]>);
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
    createWithUnknown<GenericInput extends unknown>(data: GenericInput): (DEither.Right<"createNewType", NewType<GenericName, GenericValue, GenericConstraintsHandler[number]["name"]>> | DEither.Left<"createNewTypeError", DDataParser.DataParserError>);
    /**
     * Creates a NewType value from an unknown input and throws on error.
     * 
     * ```ts
     * const strictValue = UserId.createWithUnknownOrThrow(unknownValue);
     * ```
     * 
     */
    createWithUnknownOrThrow<GenericInput extends unknown>(data: GenericInput): NewType<GenericName, GenericValue, GenericConstraintsHandler[number]["name"]>;
    /**
     * Checks if a value is a NewType of this handler (type guard).
     * 
     * ```ts
     * UserId.is(result); // type guard
     * ```
     * 
     */
    is<GenericInput extends WrappedValue>(input: GenericInput): input is Extract<GenericInput, NewType<GenericName, GenericValue, GenericConstraintsHandler[number]["name"]>>;
    /**
     * Returns a constraint handler by name from the NewType constraints list.
     * 
     * ```ts
     * const constraint = UserId.getConstraint("positive");
     * constraint.createOrThrow(1);
     * ```
     * 
     */
    getConstraint<GenericConstraintName extends GenericConstraintsHandler[number]["name"]>(name: GenericConstraintName): Extract<GenericConstraintsHandler[number], ConstraintHandler<GenericConstraintName>>;
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
export declare function createNewType<GenericName extends string, GenericDataParser extends DDataParser.DataParser, const GenericConstraintsHandler extends (ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, DDataParser.Output<GenericDataParser>>[]> | readonly [
    ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, DDataParser.Output<GenericDataParser>>[]>,
    ...ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, DDataParser.Output<GenericDataParser>>[]>[]
]) = never>(name: GenericName, dataParser: GenericDataParser & DataParserContainTransform<GenericDataParser>, constraint?: GenericConstraintsHandler): NewTypeHandler<GenericName, DeepReadonly<DDataParser.Output<GenericDataParser>>, DArray.ArrayCoalescing<NeverCoalescing<GenericConstraintsHandler, readonly []>>>;
export declare namespace createNewType {
    var overrideHandler: import("..").OverrideHandler<NewTypeHandler<string, unknown, readonly []>>;
}
export type GetNewType<GenericHandler extends NewTypeHandler<string, unknown, readonly any[]>> = Extract<GenericHandler extends any ? NewType<GenericHandler["name"], DDataParser.Output<GenericHandler["dataParser"]>, GenericHandler["constrains"][number]["name"]> : never, any>;
export {};
