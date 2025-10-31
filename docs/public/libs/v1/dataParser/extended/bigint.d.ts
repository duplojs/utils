import { type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
type _DataParserBigIntExtended<GenericDefinition extends dataParsers.DataParserDefinitionBigInt> = (dataParsers.DataParserBigInt<GenericDefinition> & DataParserExtended);
export interface DataParserBigIntExtended<GenericDefinition extends dataParsers.DataParserDefinitionBigInt = dataParsers.DataParserDefinitionBigInt> extends _DataParserBigIntExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserBigIntCheckers,
        ...dataParsers.DataParserBigIntCheckers[]
    ]>(...args: GenericChecker): DataParserBigIntExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    min(min: bigint, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionBigIntMin, "min">>): DataParserBigIntExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerBigIntMin
    ]>>;
    max(max: bigint, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionBigIntMax, "max">>): DataParserBigIntExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerBigIntMax
    ]>>;
}
export declare function bigint<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionBigInt> = never>(definition?: GenericDefinition): DataParserBigIntExtended<MergeDefinition<dataParsers.DataParserDefinitionBigInt, NeverCoalescing<GenericDefinition, {}>>>;
export {};
