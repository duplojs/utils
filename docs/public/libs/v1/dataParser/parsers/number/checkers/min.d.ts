import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
export interface DataParserCheckerDefinitionNumberMin extends DataParserCheckerDefinition {
    min: number;
}
export declare const dataParserCheckerNumberMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"data-parser-checker-number-min", unknown>>;
type _DataParserCheckerNumberMin = (Kind<typeof dataParserCheckerNumberMinKind.definition> & DataParserChecker<DataParserCheckerDefinitionNumberMin, number>);
export interface DataParserCheckerNumberMin extends _DataParserCheckerNumberMin {
}
export declare function checkerNumberMin(min: number, definition?: Partial<Omit<DataParserCheckerDefinitionNumberMin, "min">>): DataParserCheckerNumberMin;
export {};
