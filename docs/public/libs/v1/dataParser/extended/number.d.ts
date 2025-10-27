import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
type _DataParserNumberExtended<GenericDefinition extends dataParsers.DataParserDefinitionNumber> = (dataParsers.DataParserNumber<GenericDefinition> & DataParserExtended);
export interface DataParserNumberExtended<GenericDefinition extends dataParsers.DataParserDefinitionNumber = dataParsers.DataParserDefinitionNumber> extends _DataParserNumberExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserNumberCheckers,
        ...dataParsers.DataParserNumberCheckers[]
    ]>(...args: GenericChecker): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionNumberMin, "min">>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerNumberMin
    ]>>;
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionNumberMax, "max">>): DataParserNumberExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerNumberMax
    ]>>;
}
export declare function number<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionNumber> = never>(definition?: GenericDefinition): DataParserNumberExtended<MergeDefinition<dataParsers.DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}>>>;
export declare function int(definition?: Partial<dataParsers.DataParserCheckerDefinitionInt>): DataParserNumberExtended<{
    readonly checkers: readonly [dataParsers.DataParserCheckerInt];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
