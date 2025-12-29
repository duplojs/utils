import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserNumberExtended<GenericDefinition extends dataParsers.DataParserDefinitionNumber> = (Kind<typeof dataParsers.numberKind.definition> & DataParserExtended<GenericDefinition, number, number>);
export interface DataParserNumberExtended<GenericDefinition extends dataParsers.DataParserDefinitionNumber = dataParsers.DataParserDefinitionNumber> extends _DataParserNumberExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserNumberCheckers,
        ...dataParsers.DataParserNumberCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserNumberCheckers,
        ...dataParsers.DataParserNumberCheckers[]
    ], GenericChecker>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionNumber>(definition: GenericDefinition): DataParserNumberExtended<MergeDefinition<dataParsers.DataParserDefinitionNumber, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionNumberMin, "min">>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerNumberMin
    ]>>;
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionNumberMax, "max">>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerNumberMax
    ]>>;
    int(definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerInt
    ]>>;
}
export declare function number<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionNumber> = never>(definition?: GenericDefinition): DataParserNumberExtended<MergeDefinition<dataParsers.DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace number {
    var overrideHandler: import("../../common").OverrideHandler<DataParserNumberExtended<dataParsers.DataParserDefinitionNumber>>;
}
export declare function int(definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>): DataParserNumberExtended<{
    readonly checkers: readonly [dataParsers.DataParserCheckerInt];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
