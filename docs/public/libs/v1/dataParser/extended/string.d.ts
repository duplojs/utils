import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserStringExtended<GenericDefinition extends dataParsers.DataParserDefinitionString> = (Kind<typeof dataParsers.stringKind.definition> & DataParserExtended<GenericDefinition, string, string>);
export interface DataParserStringExtended<GenericDefinition extends dataParsers.DataParserDefinitionString = dataParsers.DataParserDefinitionString> extends _DataParserStringExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserStringCheckers,
        ...dataParsers.DataParserStringCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserStringCheckers,
        ...dataParsers.DataParserStringCheckers[]
    ], GenericChecker>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionString>(definition: GenericDefinition): DataParserStringExtended<MergeDefinition<dataParsers.DataParserDefinitionString, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionStringMin, "min">>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerStringMin
    ]>>;
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionStringMax, "max">>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerStringMax
    ]>>;
    regex(regex: RegExp, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionStringRegex, "regex">>): DataParserStringExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerStringRegex
    ]>>;
}
export declare function string<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionString> = never>(definition?: GenericDefinition): DataParserStringExtended<MergeDefinition<dataParsers.DataParserDefinitionString, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace string {
    var overrideHandler: import("../../common").OverrideHandler<DataParserStringExtended<dataParsers.DataParserDefinitionString>>;
}
export declare function email(definition?: Partial<dataParsers.DataParserCheckerDefinitionEmail>): DataParserStringExtended<{
    readonly checkers: readonly [dataParsers.DataParserCheckerEmail];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export declare function url(definition?: Partial<dataParsers.DataParserCheckerDefinitionUrl>): DataParserStringExtended<{
    readonly checkers: readonly [dataParsers.DataParserCheckerUrl];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
