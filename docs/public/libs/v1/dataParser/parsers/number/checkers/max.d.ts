import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
export interface DataParserCheckerDefinitionNumberMax extends DataParserCheckerDefinition {
    max: number;
}
export declare const dataParserCheckerNumberMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"data-parser-checker-number-max", unknown>>;
type _DataParserCheckerNumberMax = (Kind<typeof dataParserCheckerNumberMaxKind.definition> & DataParserChecker<DataParserCheckerDefinitionNumberMax, number>);
export interface DataParserCheckerNumberMax extends _DataParserCheckerNumberMax {
}
export declare function checkerNumberMax(max: number, definition?: Partial<Omit<DataParserCheckerDefinitionNumberMax, "max">>): DataParserCheckerNumberMax;
export {};
