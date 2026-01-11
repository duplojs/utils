import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
import * as DDate from "../../../../date";
export interface DataParserCheckerDefinitionTimeMin extends DataParserCheckerDefinition {
    min: DDate.TheTime;
}
export declare const checkerTimeMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-time-min", unknown>>;
type _DataParserCheckerTimeMin = (Kind<typeof checkerTimeMinKind.definition> & DataParserChecker<DataParserCheckerDefinitionTimeMin, DDate.TheTime>);
export interface DataParserCheckerTimeMin extends _DataParserCheckerTimeMin {
}
export declare function checkerTimeMin(min: DDate.TheTime, definition?: Partial<Omit<DataParserCheckerDefinitionTimeMin, "min">>): DataParserCheckerTimeMin;
export {};
