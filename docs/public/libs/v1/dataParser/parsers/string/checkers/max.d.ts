import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserCheckerBase } from "../../../../dataParser/base";
export interface DataParserCheckerDefinitionStringMax extends DataParserCheckerDefinition {
    max: number;
}
export declare const checkerStringMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-string-max", unknown>>;
type _DataParserCheckerStringMax = (Kind<typeof checkerStringMaxKind.definition> & DataParserCheckerBase<DataParserCheckerDefinitionStringMax, string>);
export interface DataParserCheckerStringMax extends _DataParserCheckerStringMax {
}
export declare function checkerStringMax(max: number, definition?: Partial<Omit<DataParserCheckerDefinitionStringMax, "max">>): DataParserCheckerStringMax;
export {};
