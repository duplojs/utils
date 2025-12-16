import { type GetKindHandler, type GetKindValue, type Kind, type KindHandler, type RemoveKind } from "../common";
import { SymbolDataParserErrorIssue, SymbolDataParserErrorPromiseIssue, type DataParserError } from "./error";
import * as DEither from "../either";
export declare const SymbolDataParserErrorLabel = "SymbolDataParserError";
export declare const SymbolDataParserError: unique symbol;
export type SymbolDataParserError = typeof SymbolDataParserError;
export declare const checkerKind: KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/checker", unknown>>;
export interface DataParserCheckerDefinition {
    readonly errorMessage?: string;
}
export interface DataParserChecker<GenericDefinition extends DataParserCheckerDefinition = DataParserCheckerDefinition, GenericInput extends unknown = unknown> extends Kind<typeof checkerKind.definition, GenericInput> {
    readonly definition: GenericDefinition;
    exec(data: GenericInput, self: this): GenericInput | SymbolDataParserErrorIssue;
}
export type InputChecker<GenericDataParser extends DataParserChecker> = Parameters<GenericDataParser["exec"]>[0];
export declare function dataParserCheckerInit<GenericDataParserChecker extends DataParserChecker>(kind: Exclude<GetKindHandler<GenericDataParserChecker>, typeof checkerKind>, params: NoInfer<Omit<RemoveKind<GenericDataParserChecker>, "exec">>, exec: (...args: Parameters<GenericDataParserChecker["exec"]>) => GetKindValue<typeof checkerKind, GenericDataParserChecker> | SymbolDataParserErrorIssue): GenericDataParserChecker;
export declare const dataParserKind: KindHandler<import("../common").KindDefinition<"@DuplojsUtilsDataParser/base", {
    input: unknown;
    output: unknown;
}>>;
export interface DataParserDefinition<GenericChecker extends DataParserChecker = DataParserChecker> {
    readonly errorMessage?: string;
    readonly checkers: readonly GenericChecker[];
}
export interface DataParser<GenericDefinition extends DataParserDefinition = DataParserDefinition, GenericOutput extends unknown = unknown, GenericInput extends unknown = GenericOutput> extends Kind<typeof dataParserKind.definition, {
    input: GenericInput;
    output: GenericOutput;
}> {
    readonly definition: GenericDefinition;
    exec(data: unknown, error: DataParserError): GenericOutput | SymbolDataParserError;
    asyncExec(data: unknown, error: DataParserError): Promise<GenericOutput | SymbolDataParserError>;
    parse(data: unknown): DEither.EitherSuccess<GenericOutput> | DEither.EitherError<DataParserError>;
    asyncParse(data: unknown): Promise<DEither.EitherSuccess<GenericOutput> | DEither.EitherError<DataParserError>>;
    addChecker(...args: never): DataParser;
    clone(): this;
    construct(definition: never): DataParser;
}
interface DataParserInitExecParams<GenericDataParser extends DataParser> {
    sync(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]): (GetKindValue<typeof dataParserKind, GenericDataParser>["output"] | SymbolDataParserErrorIssue | SymbolDataParserErrorPromiseIssue);
    async(...args: [...Parameters<GenericDataParser["exec"]>, self: GenericDataParser]): Promise<GetKindValue<typeof dataParserKind, GenericDataParser>["output"] | SymbolDataParserErrorIssue | SymbolDataParserErrorPromiseIssue>;
}
export declare function dataParserInit<GenericDataParser extends DataParser>(kind: Exclude<GetKindHandler<GenericDataParser>, typeof dataParserKind>, definition: GenericDataParser["definition"], exec: (DataParserInitExecParams<GenericDataParser> | DataParserInitExecParams<GenericDataParser>["sync"])): GenericDataParser;
export declare namespace dataParserInit {
    var overrideHandler: import("../common").OverrideHandler<DataParser<DataParserDefinition<DataParserChecker<DataParserCheckerDefinition, unknown>>, unknown, unknown>>;
}
export type Output<GenericDataParser extends DataParser> = GetKindValue<typeof dataParserKind, GenericDataParser>["output"];
export type Input<GenericDataParser extends DataParser> = GetKindValue<typeof dataParserKind, GenericDataParser>["input"];
export type Contract<GenericOutput extends unknown, GenericInput extends unknown = GenericOutput> = DataParser<DataParserDefinition<never>, GenericOutput, GenericInput>;
export {};
