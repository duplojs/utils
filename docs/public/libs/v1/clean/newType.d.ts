import { type Kind, type WrappedValue, type Unwrap, type DeepReadonly, type IsEqual, type DP } from "..";
import { constrainedTypeKind, type ConstraintsHandlerArguments, type ConstraintHandler, type ExtractConstraintSetConstraintHandlers } from "./constraint";
import { type Primitive, type EligiblePrimitive, type PrimitiveHandlers, type PrimitiveHandler } from "./primitive";
import * as DEither from "../either";
import * as DDataParser from "../dataParser";
import { type DataParserContainTransform } from "./types";
export declare const newTypeKind: import("..").KindHandler<import("..").KindDefinition<"@DuplojsUtilsClean/new-type", string>>;
type _NewType<GenericName extends string, GenericValue extends unknown, GenericConstraintsName extends string> = (Kind<typeof newTypeKind.definition, GenericName> & Kind<typeof constrainedTypeKind.definition, Record<GenericConstraintsName, unknown>> & WrappedValue<GenericValue>);
export interface NewType<GenericName extends string = string, GenericValue extends unknown = unknown, GenericConstraintsName extends string = never> extends _NewType<GenericName, GenericValue, GenericConstraintsName> {
}
export interface NewTypeError<GenericName extends string = string> {
    newTypeName: GenericName;
    dataParserError: DDataParser.DataParserError;
}
export declare const newTypeHandlerKind: import("..").KindHandler<import("..").KindDefinition<"@DuplojsUtilsClean/new-type-handler", unknown>>;
export interface NewTypeHandler<GenericName extends string = string, GenericValue extends unknown = unknown, GenericConstraintsHandler extends readonly ConstraintHandler[] = readonly ConstraintHandler[], GenericInput extends unknown = unknown> extends Kind<typeof newTypeHandlerKind.definition> {
    /**
     * The NewType name used as the brand (for example "userId").
     * 
     */
    readonly name: GenericName;
    /**
     * @deprecated
     */
    readonly dataParser: DDataParser.DataParser<GenericValue, unknown>;
    /**
     * @deprecated
     */
    readonly constraints: GenericConstraintsHandler;
    readonly internal: {
        /**
         * The DataParser used to validate and transform raw inputs.
         * 
         */
        readonly dataParser: DDataParser.DataParser<GenericValue, unknown>;
        /**
         * The list of constraints applied to this NewType.
         * 
         */
        readonly constraints: GenericConstraintsHandler;
        /**
         * The constraint kind metadata applied to this NewType.
         * 
         */
        readonly constraintKindValue: Record<string, null>;
    };
    /**
     * Creates a NewType value and returns an Either.
     * On validation failure, the left value contains the NewType name and the underlying DataParser error.
     * 
     * ```ts
     * const result = UserId.create(12);
     * ```
     * 
     */
    create<const GenericInput extends GenericValue>(data: GenericInput): (DEither.Right<"createNewType", NewType<GenericName, GenericInput, GenericConstraintsHandler[number]["name"]>> | DEither.Left<"createNewTypeError", NewTypeError<GenericName>>);
    create(data: GenericValue): (DEither.Right<"createNewType", NewType<GenericName, GenericInput, GenericConstraintsHandler[number]["name"]>> | DEither.Left<"createNewTypeError", NewTypeError<GenericName>>);
    create<GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>>(data: GenericPrimitive): (DEither.Right<"createNewType", (GenericPrimitive & NewType<GenericName, Unwrap<GenericPrimitive>, GenericConstraintsHandler[number]["name"]>)> | DEither.Left<"createNewTypeError", NewTypeError<GenericName>>);
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
    createOrThrow(data: GenericInput): NewType<GenericName, GenericValue, GenericConstraintsHandler[number]["name"]>;
    createOrThrow<GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>>(data: GenericPrimitive): (GenericPrimitive & NewType<GenericName, Unwrap<GenericPrimitive>, GenericConstraintsHandler[number]["name"]>);
    /**
     * Creates a NewType value from an unknown input and returns an Either.
     * 
     * ```ts
     * 	C.String,
     * 	C.StringMin(2),
     * );
     * 
     * type UserName = C.GetNewType<typeof UserName>;
     * 
     * ```
     * 
     */
    createWithUnknown<GenericInput extends unknown>(data: GenericInput): (DEither.Right<"createNewType", NewType<GenericName, GenericValue, GenericConstraintsHandler[number]["name"]>> | DEither.Left<"createNewTypeError", NewTypeError<GenericName>>);
    /**
     * Creates a NewType value from an unknown input and throws on error.
     * 
     * ```ts
     * 
     * ```
     * 
     */
    createWithUnknownOrThrow<GenericInput extends unknown>(data: GenericInput): NewType<GenericName, GenericValue, GenericConstraintsHandler[number]["name"]>;
    /**
     * Checks if a value is a NewType of this handler (type guard).
     * 
     * ```ts
     * const UserName = C.createNewType(
     * ```
     * 
     */
    is<GenericInput extends WrappedValue>(input: GenericInput): input is Extract<GenericInput, NewType<GenericName, GenericValue, GenericConstraintsHandler[number]["name"]>>;
    /**
     * Returns a constraint handler by name from the NewType constraints list.
     * 
     * ```ts
     * 
     * const unknownValue: unknown = 20;
     * ```
     * 
     */
    getConstraint<GenericConstraintName extends GenericConstraintsHandler[number]["name"]>(name: GenericConstraintName): Extract<GenericConstraintsHandler[number], ConstraintHandler<GenericConstraintName>>;
}
declare const CreateNewTypeError_base: new (params: {
    "@DuplojsUtilsError/create-new-type-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("..").KindDefinition<"@DuplojsUtilsError/create-new-type-error", unknown>, unknown> & Kind<import("..").KindDefinition<"create-new-type-error", unknown>, unknown>;
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
 * - Classic with DataParser: `createNewType(name, dataParser, constraints?)` -> returns a handler
 * - Classic with primitive handler: `createNewType(name, primitiveHandler, constraints?)` -> returns a handler
 * 
 * A NewType validates input with a DataParser, applies optional constraints, and brands the value to prevent accidental mix-ups across the domain. When a primitive handler is provided, its internal DataParser is reused.
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
 * const UserName = C.createNewType(
 * 	"user-name",
 * 	C.String,
 * 	C.StringMin(2),
 * );
 * 
 * type UserName = C.GetNewType<typeof UserName>;
 * 
 * const userName = UserName.createOrThrow("Ada");
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
 * const constraint = UserId.getConstraint("positive");
 * constraint.createOrThrow(1);
 * ```
 * 
 * @remarks
 * - You can pass a single constraint handler, a constraints set handler, or a tuple mixing constraints and constraints sets.
 * - You can pass a primitive handler such as `C.String`, `C.Number`, or `C.Date` instead of manually passing its DataParser.
 * - Constraints sets are expanded internally before being added to the NewType, preserving declaration order.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/newType
 * 
 * @namespace C
 * 
 */
export declare function createNewType<GenericName extends string, GenericDataParser extends DDataParser.DataParserBase, GenericDataParserError extends DataParserContainTransform<GenericDataParser>, const GenericConstraintsHandler extends ConstraintsHandlerArguments<Extract<DDataParser.Output<GenericDataParser>, EligiblePrimitive>> = never, GenericConstraints extends ExtractConstraintSetConstraintHandlers<GenericConstraintsHandler> = ExtractConstraintSetConstraintHandlers<GenericConstraintsHandler>>(name: GenericName, dataParser: GenericDataParser & NoInfer<GenericDataParserError>, constraint?: GenericConstraintsHandler): NewTypeHandler<GenericName, DeepReadonly<DDataParser.Output<GenericDataParser>>, GenericConstraints, IsEqual<DDataParser.Output<GenericDataParser>, DDataParser.Input<GenericDataParser>> extends true ? never : DDataParser.Input<GenericDataParser>>;
export declare function createNewType<GenericName extends string, GenericPrimitiveHandler extends PrimitiveHandlers, const GenericConstraintsHandler extends ConstraintsHandlerArguments<Extract<DDataParser.Output<GenericPrimitiveHandler["internal"]["dataParser"]>, EligiblePrimitive>> = never, GenericConstraints extends ExtractConstraintSetConstraintHandlers<GenericConstraintsHandler> = ExtractConstraintSetConstraintHandlers<GenericConstraintsHandler>>(name: GenericName, primitiveHandler: GenericPrimitiveHandler, constraint?: GenericConstraintsHandler): NewTypeHandler<GenericName, DDataParser.Output<GenericPrimitiveHandler["internal"]["dataParser"]>, NoInfer<GenericConstraints>, GenericPrimitiveHandler extends PrimitiveHandler<any, any, infer InferredInput> ? InferredInput : never>;
export declare namespace createNewType {
    var overrideHandler: import("..").OverrideHandler<NewTypeHandler<string, unknown, readonly ConstraintHandler<string, EligiblePrimitive, readonly DP.DataParserChecker<unknown>[], unknown>[], unknown>>;
}
export type GetNewType<GenericHandler extends NewTypeHandler<string, unknown, readonly any[]>, GenericValue extends DDataParser.Output<GenericHandler["internal"]["dataParser"]> = DDataParser.Output<GenericHandler["internal"]["dataParser"]>> = Extract<GenericHandler extends any ? NewType<GenericHandler["name"], GenericValue, GenericHandler["internal"]["constraints"][number]["name"]> : never, any>;
export {};
