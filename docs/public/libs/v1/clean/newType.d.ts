import { type Kind, type WrappedValue, type Unwrap, type NeverCoalescing } from "..";
import { constrainedTypeKind, type ConstraintHandler } from "./constraint";
import { type Primitive, type EligiblePrimitive } from "./primitive";
import * as DEither from "../either";
import * as DArray from "../array";
import type * as DDataParser from "../dataParser";
export declare const newTypeKind: import("..").KindHandler<import("..").KindDefinition<"@DuplojsUtilsClean/new-type", string>>;
type _NewType<GenericName extends string, GenericValue extends unknown, GenericConstrainName extends string> = (Kind<typeof newTypeKind.definition, GenericName> & Kind<typeof constrainedTypeKind.definition, Record<GenericConstrainName, unknown>> & WrappedValue<GenericValue>);
export interface NewType<GenericName extends string = string, GenericValue extends unknown = unknown, GenericConstrainName extends string = never> extends _NewType<GenericName, GenericValue, GenericConstrainName> {
}
export declare const newTypeHandlerKind: import("..").KindHandler<import("..").KindDefinition<"@DuplojsUtilsClean/new-type-handler", unknown>>;
export interface NewTypeHandler<GenericName extends string = string, GenericValue extends unknown = unknown, GenericConstrainHandler extends readonly ConstraintHandler[] = readonly []> extends Kind<typeof newTypeHandlerKind.definition> {
    readonly name: GenericName;
    readonly dataParser: DDataParser.Contract<GenericValue>;
    readonly constrains: GenericConstrainHandler;
    create<const GenericData extends GenericValue>(data: GenericData): (DEither.EitherRight<"createNewType", NewType<GenericName, GenericData, GenericConstrainHandler[number]["name"]>> | DEither.EitherLeft<"createNewTypeError", DDataParser.DataParserError>);
    create<GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>>(data: GenericPrimitive): (DEither.EitherRight<"createNewType", (GenericPrimitive & NewType<GenericName, Unwrap<GenericPrimitive>, GenericConstrainHandler[number]["name"]>)> | DEither.EitherLeft<"createNewTypeError", DDataParser.DataParserError>);
    createOrThrow<const GenericData extends GenericValue>(data: GenericData): NewType<GenericName, GenericData, GenericConstrainHandler[number]["name"]>;
    createOrThrow<GenericPrimitive extends Primitive<Extract<GenericValue, EligiblePrimitive>>>(data: GenericPrimitive): (GenericPrimitive & NewType<GenericName, Unwrap<GenericPrimitive>, GenericConstrainHandler[number]["name"]>);
    createWithUnknown<GenericData extends unknown>(data: GenericData): (DEither.EitherRight<"createNewType", NewType<GenericName, GenericValue, GenericConstrainHandler[number]["name"]>> | DEither.EitherLeft<"createNewTypeError", DDataParser.DataParserError>);
    createWithUnknownOrThrow<GenericData extends unknown>(data: GenericData): NewType<GenericName, GenericValue, GenericConstrainHandler[number]["name"]>;
    is<GenericInput extends WrappedValue>(input: GenericInput): input is Extract<GenericInput, NewType<GenericName, GenericValue, GenericConstrainHandler[number]["name"]>>;
}
declare const CreateNewTypeError_base: new (params: {
    "@DuplojsUtilsError/create-new-type-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("..").KindDefinition<"create-new-type-error", unknown>, unknown> & Kind<import("..").KindDefinition<"@DuplojsUtilsError/create-new-type-error", unknown>, unknown>;
export declare class CreateNewTypeError extends CreateNewTypeError_base {
    newTypeName: string;
    data: unknown;
    dataParserError: DDataParser.DataParserError;
    constructor(newTypeName: string, data: unknown, dataParserError: DDataParser.DataParserError);
}
export declare function createNewType<GenericName extends string, GenericDataParser extends DDataParser.DataParser, const GenericConstrainHandler extends (ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, DDataParser.Output<GenericDataParser>>[]> | readonly [
    ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, DDataParser.Output<GenericDataParser>>[]>,
    ...ConstraintHandler<string, EligiblePrimitive, readonly DDataParser.DataParserChecker<DDataParser.DataParserCheckerDefinition, DDataParser.Output<GenericDataParser>>[]>[]
]) = never>(name: GenericName, dataParser: GenericDataParser, constraint?: GenericConstrainHandler): NewTypeHandler<GenericName, DDataParser.Output<GenericDataParser>, DArray.ArrayCoalescing<NeverCoalescing<GenericConstrainHandler, readonly []>>>;
export type GetNewType<GenericHandler extends NewTypeHandler<string, unknown, readonly any[]>> = Extract<GenericHandler extends any ? NewType<GenericHandler["name"], DDataParser.Output<GenericHandler["dataParser"]>, GenericHandler["constrains"][number]["name"]> : never, any>;
export {};
