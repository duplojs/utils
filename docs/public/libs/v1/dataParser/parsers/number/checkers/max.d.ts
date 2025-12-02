import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../../dataParser/base";
export interface DataParserCheckerDefinitionNumberMax extends DataParserCheckerDefinition {
    max: number;
}
export declare const checkerNumberMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-number-max", unknown>>;
type _DataParserCheckerNumberMax = (Kind<typeof checkerNumberMaxKind.definition> & DataParserChecker<DataParserCheckerDefinitionNumberMax, number>);
export interface DataParserCheckerNumberMax extends _DataParserCheckerNumberMax {
}
export declare function checkerNumberMax(max: number, definition?: Partial<Omit<DataParserCheckerDefinitionNumberMax, "max">>): DataParserCheckerNumberMax;
export {};
