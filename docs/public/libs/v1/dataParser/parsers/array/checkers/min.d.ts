import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../../dataParser/base";
export interface DataParserCheckerDefinitionArrayMin extends DataParserCheckerDefinition {
    min: number;
}
export declare const checkerArrayMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-array-min", unknown>>;
type _DataParserCheckerArrayMin = (Kind<typeof checkerArrayMinKind.definition> & DataParserChecker<DataParserCheckerDefinitionArrayMin, unknown[]>);
export interface DataParserCheckerArrayMin extends _DataParserCheckerArrayMin {
}
export declare function checkerArrayMin(min: number, definition?: Partial<Omit<DataParserCheckerDefinitionArrayMin, "min">>): DataParserCheckerArrayMin;
export {};
