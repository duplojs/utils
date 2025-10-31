import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
export interface DataParserCheckerDefinitionStringMax extends DataParserCheckerDefinition {
    max: number;
}
export declare const dataParserCheckerStringMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-string-max", unknown>>;
type _DataParserCheckerStringMax = (Kind<typeof dataParserCheckerStringMaxKind.definition> & DataParserChecker<DataParserCheckerDefinitionStringMax, string>);
export interface DataParserCheckerStringMax extends _DataParserCheckerStringMax {
}
export declare function checkerStringMax(max: number, definition?: Partial<Omit<DataParserCheckerDefinitionStringMax, "max">>): DataParserCheckerStringMax;
export {};
