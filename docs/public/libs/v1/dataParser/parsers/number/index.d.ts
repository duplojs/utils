import { type NeverCoalescing, type Kind } from "../../../common";
import { type DataParserDefinition, type DataParser } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../types";
import { type DataParserCheckerInt, type DataParserCheckerNumberMin, type DataParserCheckerNumberMax } from "./checkers";
export * from "./checkers";
export type DataParserNumberCheckers = (DataParserCheckerInt | DataParserCheckerNumberMin | DataParserCheckerNumberMax);
export interface DataParserDefinitionNumber extends DataParserDefinition<DataParserNumberCheckers> {
    readonly coerce: boolean;
}
export declare const dataParserNumberKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"data-parser-number", unknown>>;
type _DataParserNumber<GenericDefinition extends DataParserDefinitionNumber> = (DataParser<GenericDefinition, number, number> & Kind<typeof dataParserNumberKind.definition>);
export interface DataParserNumber<GenericDefinition extends DataParserDefinitionNumber = DataParserDefinitionNumber> extends _DataParserNumber<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserNumberCheckers,
        ...DataParserNumberCheckers[]
    ]>(...args: GenericChecker): DataParserNumber<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function number<const GenericDefinition extends Partial<DataParserDefinitionNumber> = never>(definition?: GenericDefinition): DataParserNumber<MergeDefinition<DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}>>>;
