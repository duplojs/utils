import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../../dataParser/base";
import * as DDate from "../../../../date";
export interface DataParserCheckerDefinitionTimeMax extends DataParserCheckerDefinition {
    max: DDate.TheTime;
}
export declare const checkerTimeMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-time-max", unknown>>;
type _DataParserCheckerTimeMax = (Kind<typeof checkerTimeMaxKind.definition> & DataParserChecker<DataParserCheckerDefinitionTimeMax, DDate.TheTime>);
export interface DataParserCheckerTimeMax extends _DataParserCheckerTimeMax {
}
export declare function checkerTimeMax(max: DDate.TheTime, definition?: Partial<Omit<DataParserCheckerDefinitionTimeMax, "max">>): DataParserCheckerTimeMax;
export {};
