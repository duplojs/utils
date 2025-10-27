import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
export interface DataParserCheckerDefinitionArrayMin extends DataParserCheckerDefinition {
    min: number;
}
export declare const dataParserCheckerArrayMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"data-parser-checker-array-min", unknown>>;
type _DataParserCheckerArrayMin = (Kind<typeof dataParserCheckerArrayMinKind.definition> & DataParserChecker<DataParserCheckerDefinitionArrayMin, unknown[]>);
export interface DataParserCheckerArrayMin extends _DataParserCheckerArrayMin {
}
export declare function checkerArrayMin(min: number, definition?: Partial<Omit<DataParserCheckerDefinitionArrayMin, "min">>): DataParserCheckerArrayMin;
export {};
