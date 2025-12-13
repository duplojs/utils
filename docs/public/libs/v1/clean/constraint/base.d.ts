import { type Unwrap, type Kind, type WrappedValue } from "../..";
import { type Primitive, type EligiblePrimitive, type PrimitiveHandler } from "../primitive";
import * as DArray from "../../array";
import * as DEither from "../../either";
import type * as DDataParser from "../../dataParser";
export declare const constrainedTypeKind: import("../..").KindHandler<import("../..").KindDefinition<"@DuplojsUtilsClean/constrained-type", Record<string, unknown>>>;
export interface ConstrainedType<GenericName extends string, GenericValue extends unknown> extends Kind<typeof constrainedTypeKind.definition, Record<GenericName, unknown>>, WrappedValue<GenericValue> {
}
export declare const constraintHandlerKind: import("../..").KindHandler<import("../..").KindDefinition<"@DuplojsUtilsClean/constraint-handler", unknown>>;
export interface ConstraintHandler<GenericName extends string = string, GenericPrimitiveValue extends EligiblePrimitive = EligiblePrimitive, GenericCheckers extends readonly DDataParser.DataParserChecker[] = readonly DDataParser.DataParserChecker[]> extends Kind<typeof constraintHandlerKind.definition> {
    readonly name: GenericName;
    readonly checkers: GenericCheckers;
    readonly primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>;
    create<GenericData extends GenericPrimitiveValue>(data: GenericData): (DEither.EitherRight<"createConstrainedType", ConstrainedType<GenericName, GenericData>> | DEither.EitherLeft<"createConstrainedTypeError", DDataParser.DataParserError>);
    create<GenericPrimitive extends Primitive<GenericPrimitiveValue>>(data: GenericPrimitive): (DEither.EitherRight<"createConstrainedType", (GenericPrimitive & ConstrainedType<GenericName, Unwrap<GenericPrimitive>>)> | DEither.EitherLeft<"createConstrainedTypeError", DDataParser.DataParserError>);
    createOrThrow<GenericData extends GenericPrimitiveValue>(data: GenericData): ConstrainedType<GenericName, GenericData>;
    createOrThrow<GenericPrimitive extends Primitive<GenericPrimitiveValue>>(data: GenericPrimitive): (GenericPrimitive & ConstrainedType<GenericName, Unwrap<GenericPrimitive>>);
    createWithUnknown<GenericData extends unknown>(data: GenericData): (DEither.EitherRight<"createConstrainedType", ConstrainedType<GenericName, GenericPrimitiveValue>> | DEither.EitherLeft<"createConstrainedTypeError", DDataParser.DataParserError>);
    createWithUnknownOrThrow<GenericData extends unknown>(data: GenericData): ConstrainedType<GenericName, GenericPrimitiveValue>;
    is<GenericInput extends WrappedValue>(input: GenericInput): input is Extract<GenericInput, ConstrainedType<GenericName, GenericPrimitiveValue>>;
}
declare const CreateConstrainedTypeError_base: new (params: {
    "@DuplojsUtilsError/create-constrained-type-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("../..").KindDefinition<"create-constrained-type-error", unknown>, unknown> & Kind<import("../..").KindDefinition<"@DuplojsUtilsError/create-constrained-type-error", unknown>, unknown>;
export declare class CreateConstrainedTypeError extends CreateConstrainedTypeError_base {
    constrainedTypeName: string;
    data: unknown;
    dataParserError: DDataParser.DataParserError;
    constructor(constrainedTypeName: string, data: unknown, dataParserError: DDataParser.DataParserError);
}
export declare function createConstraint<GenericName extends string, GenericPrimitiveValue extends EligiblePrimitive, const GenericChecker extends (DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, GenericPrimitiveValue> | readonly [
    DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, GenericPrimitiveValue>,
    ...DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, GenericPrimitiveValue>[]
]) = never>(name: GenericName, primitiveHandler: PrimitiveHandler<GenericPrimitiveValue>, checker: GenericChecker): ConstraintHandler<GenericName, GenericPrimitiveValue, DArray.ArrayCoalescing<GenericChecker>>;
export type Constraint<GenericConstrainHandler extends ConstraintHandler, GenericValue extends DDataParser.InputChecker<GenericConstrainHandler["checkers"][number]> = DDataParser.InputChecker<GenericConstrainHandler["checkers"][number]>> = Extract<ConstrainedType<GenericConstrainHandler["name"], GenericValue>, any>;
export {};
