import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserCheckerBase } from "../../../../dataParser/base";
export interface DataParserCheckerDefinitionStringMin extends DataParserCheckerDefinition {
    min: number;
}
export declare const checkerStringMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-string-min", unknown>>;
type _DataParserCheckerStringMin = (Kind<typeof checkerStringMinKind.definition> & DataParserCheckerBase<DataParserCheckerDefinitionStringMin, string>);
export interface DataParserCheckerStringMin extends _DataParserCheckerStringMin {
}
export declare function checkerStringMin(min: number, definition?: Partial<Omit<DataParserCheckerDefinitionStringMin, "min">>): DataParserCheckerStringMin;
export {};
