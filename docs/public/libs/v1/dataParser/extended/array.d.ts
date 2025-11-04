import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser } from "../base";
type _DataParserArrayExtended<GenericDefinition extends dataParsers.DataParserDefinitionArray> = (dataParsers.DataParserArray<GenericDefinition> & DataParserExtended);
export interface DataParserArrayExtended<GenericDefinition extends dataParsers.DataParserDefinitionArray = dataParsers.DataParserDefinitionArray> extends _DataParserArrayExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserArrayCheckers,
        ...dataParsers.DataParserArrayCheckers[]
    ]>(...args: GenericChecker): DataParserArrayExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">>): DataParserArrayExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerArrayMin
    ]>>;
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">>): DataParserArrayExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerArrayMax
    ]>>;
}
export declare function array<GenericElement extends DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionArray, "element">> = never>(element: GenericElement, definition?: GenericDefinition): DataParserArrayExtended<MergeDefinition<dataParsers.DataParserDefinitionArray, NeverCoalescing<GenericDefinition, {}> & {
    element: GenericElement;
}>>;
export {};
