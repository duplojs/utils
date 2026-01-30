import { type Kind, type WrappedValue, type UnionToIntersection } from "../..";
import { type GetConstraint, type ConstraintHandler } from "../constraint";
import { type Primitive, type EligiblePrimitive, type PrimitiveHandler } from "../primitive";
import * as DEither from "../../either";
import * as DArray from "../../array";
import type * as DDataParser from "../../dataParser";
export declare const constraintsSetHandlerKind: import("../..").KindHandler<import("../..").KindDefinition<"@DuplojsUtilsClean/constraints-set-handler", unknown>>;
export interface ConstraintsSetHandler<GenericPrimitiveValue extends EligiblePrimitive = EligiblePrimitive, GenericConstrainsHandler extends readonly ConstraintHandler[] = readonly []> extends Kind<typeof constraintsSetHandlerKind.definition> {
    /**
     * The primitive handler used to validate and wrap values (e.g. `C.String`, `C.Number`).
     * 
     */
    readonly primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>;
    /**
     * The list of constraint handlers applied by this set.
     * 
     */
    readonly constrains: GenericConstrainsHandler;
    /**
     * Creates a constrained value and returns an Either.
     * 
     * ```ts
     * const result = UsernameConstraints.create("Ada");
     * 
     * if (E.isRight(result)) {
     * 	// result: E.Right<"createConstraintsSet", C.Primitive<"Ada"> & C.GetConstraints<typeof UsernameConstraints>>
     * }
     * ```
     * 
     */
    create<const GenericInput extends GenericPrimitiveValue>(data: GenericInput): (DEither.Right<"createConstraintsSet", (Primitive<GenericInput> & UnionToIntersection<GenericConstrainsHandler[number] extends infer InferredConstraint ? InferredConstraint extends ConstraintHandler ? GetConstraint<InferredConstraint> : never : never>)> | DEither.Left<"createConstraintsSetError", DDataParser.DataParserError>);
    create<GenericPrimitive extends Primitive<GenericPrimitiveValue>>(data: GenericPrimitive): (DEither.Right<"createConstraintsSet", (GenericPrimitive & UnionToIntersection<GenericConstrainsHandler[number] extends infer InferredConstraint ? InferredConstraint extends ConstraintHandler ? GetConstraint<InferredConstraint> : never : never>)> | DEither.Left<"createConstraintsSetError", DDataParser.DataParserError>);
    /**
     * Creates a constrained value and throws on error. Works with raw values or primitives.
     * 
     * ```ts
     * const value = UsernameConstraints.createOrThrow("Nova");
     * // value: C.Primitive<"Nova"> & C.GetConstraints<typeof UsernameConstraints>
     * 
     * const primitive = C.String.createOrThrow("Kit");
     * UsernameConstraints.create(primitive);
     * ```
     * 
     */
    createOrThrow<const GenericInput extends GenericPrimitiveValue>(data: GenericInput): (Primitive<GenericInput> & UnionToIntersection<GenericConstrainsHandler[number] extends infer InferredConstraint ? InferredConstraint extends ConstraintHandler ? GetConstraint<InferredConstraint> : never : never>);
    createOrThrow<GenericPrimitive extends Primitive<GenericPrimitiveValue>>(data: GenericPrimitive): (GenericPrimitive & UnionToIntersection<GenericConstrainsHandler[number] extends infer InferredConstraint ? InferredConstraint extends ConstraintHandler ? GetConstraint<InferredConstraint> : never : never>);
    /**
     * Creates a constrained value from an unknown input and returns an Either.
     * 
     * ```ts
     * const unknownValue: unknown = "Sam";
     * const maybe = UsernameConstraints.createWithUnknown(unknownValue);
     * ```
     * 
     */
    createWithUnknown<GenericInput extends unknown>(data: GenericInput): (DEither.Right<"createConstraintsSet", (Primitive<GenericPrimitiveValue> & UnionToIntersection<GenericConstrainsHandler[number] extends infer InferredConstraint ? InferredConstraint extends ConstraintHandler ? GetConstraint<InferredConstraint> : never : never>)> | DEither.Left<"createConstraintsSetError", DDataParser.DataParserError>);
    /**
     * Creates a constrained value from an unknown input and throws on error.
     * 
     * ```ts
     * const strictValue = UsernameConstraints.createWithUnknownOrThrow(unknownValue);
     * ```
     * 
     */
    createWithUnknownOrThrow<GenericInput extends unknown>(data: GenericInput): (Primitive<GenericPrimitiveValue> & UnionToIntersection<GenericConstrainsHandler[number] extends infer InferredConstraint ? InferredConstraint extends ConstraintHandler ? GetConstraint<InferredConstraint> : never : never>);
    /**
     * Checks if a value satisfies all constraints of the set (type guard).
     * 
     * ```ts
     * UsernameConstraints.is(value); // type guard
     * ```
     * 
     */
    is<GenericInput extends WrappedValue>(input: GenericInput): input is Extract<GenericInput, (Primitive<GenericPrimitiveValue> & UnionToIntersection<GenericConstrainsHandler[number] extends infer InferredConstraint ? InferredConstraint extends ConstraintHandler ? GetConstraint<InferredConstraint> : never : never>)>;
    /**
     * Returns a constraint handler by name from the constraints set.
     * 
     * ```ts
     * const constraint = UsernameConstraints.getConstraint("string-max-16");
     * constraint.createOrThrow("hello");
     * ```
     * 
     */
    getConstraint<GenericConstraintName extends GenericConstrainsHandler[number]["name"]>(name: GenericConstraintName): Extract<GenericConstrainsHandler[number], ConstraintHandler<GenericConstraintName>>;
}
declare const CreateConstraintsSetError_base: new (params: {
    "@DuplojsUtilsError/create-constraint-set-error"?: unknown;
}, parentParams: readonly [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("../..").KindDefinition<"create-constraint-set-error", unknown>, unknown> & Kind<import("../..").KindDefinition<"@DuplojsUtilsError/create-constraint-set-error", unknown>, unknown>;
export declare class CreateConstraintsSetError extends CreateConstraintsSetError_base {
    data: unknown;
    dataParserError: DDataParser.DataParserError;
    constructor(data: unknown, dataParserError: DDataParser.DataParserError);
}
/**
 * Creates a constraints set handler to apply multiple constraints to a primitive.
 * 
 * **Supported call styles:**
 * - Classic: `createConstraintsSet(primitiveHandler, constraints)` -> returns a handler
 * 
 * A constraints set validates input with the primitive DataParser, applies all constraint checkers, and tags the value with each constraint name. Use it to compose multiple constraints once and reuse the handler.
 * 
 * ```ts
 * const UsernameConstraints = C.createConstraintsSet(
 * 	C.String,
 * 	[C.StringMin(3), C.StringMax(16)],
 * );
 * 
 * const result = UsernameConstraints.create("Ada");
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstraintsSet", C.Primitive<"Ada"> & C.GetConstraints<typeof UsernameConstraints>>
 * }
 * 
 * const value = UsernameConstraints.createOrThrow("Nova");
 * // value: C.Primitive<"Nova"> & C.GetConstraints<typeof UsernameConstraints>
 * 
 * const primitive = C.String.createOrThrow("Kit");
 * UsernameConstraints.create(primitive);
 * 
 * const unknownValue: unknown = "Sam";
 * const maybe = UsernameConstraints.createWithUnknown(unknownValue);
 * const strictValue = UsernameConstraints.createWithUnknownOrThrow(unknownValue);
 * 
 * UsernameConstraints.is(value); // type guard
 * 
 * const constraint = UsernameConstraints.getConstraint("string-max-16");
 * constraint.createOrThrow("hello");
 * ```
 * 
 * @remarks
 * - You can pass a single constraint handler or a tuple of constraints.
 * - The handler accepts both raw values and primitives.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare function createConstraintsSet<GenericPrimitiveValue extends EligiblePrimitive, const GenericConstrainHandler extends (ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, GenericPrimitiveValue>[]> | readonly [
    ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, GenericPrimitiveValue>[]>,
    ...ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, GenericPrimitiveValue>[]>[]
]) = never>(primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>, constraint: GenericConstrainHandler): ConstraintsSetHandler<GenericPrimitiveValue, DArray.ArrayCoalescing<GenericConstrainHandler>>;
export type GetConstraints<GenericHandler extends ConstraintsSetHandler<string, readonly any[]>> = Extract<GenericHandler extends any ? UnionToIntersection<GenericHandler["constrains"][number] extends infer InferredConstraint ? InferredConstraint extends ConstraintHandler ? GetConstraint<InferredConstraint> : never : never> : never, any>;
export {};
