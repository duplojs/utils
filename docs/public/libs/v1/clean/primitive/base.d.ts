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
export declare const String: PrimitiveHandler<string>;
export type String = ReturnType<typeof String["createWithUnknownOrThrow"]>;
export declare const Number: PrimitiveHandler<number>;
export type Number = ReturnType<typeof Number["createWithUnknownOrThrow"]>;
export declare const BigInt: PrimitiveHandler<bigint>;
export type BigInt = ReturnType<typeof BigInt["createWithUnknownOrThrow"]>;
export declare const Boolean: PrimitiveHandler<boolean>;
export type Boolean = ReturnType<typeof Boolean["createWithUnknownOrThrow"]>;
export declare const Date: PrimitiveHandler<`date${number}-` | `date${number}+`>;
export type Date = ReturnType<typeof Date["createWithUnknownOrThrow"]>;
export type Primitives = (String | Number | BigInt | Boolean | Date);
export type PrimitiveHandlers = (typeof String | typeof Number | typeof BigInt | typeof Boolean | typeof Date);
export {};
