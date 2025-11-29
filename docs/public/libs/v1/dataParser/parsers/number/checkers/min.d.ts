import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../../dataParser/base";
export interface DataParserCheckerDefinitionNumberMin extends DataParserCheckerDefinition {
    min: number;
}
export declare const checkerNumberMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-number-min", unknown>>;
type _DataParserCheckerNumberMin = (Kind<typeof checkerNumberMinKind.definition> & DataParserChecker<DataParserCheckerDefinitionNumberMin, number>);
export interface DataParserCheckerNumberMin extends _DataParserCheckerNumberMin {
}
export declare function checkerNumberMin(min: number, definition?: Partial<Omit<DataParserCheckerDefinitionNumberMin, "min">>): DataParserCheckerNumberMin;
export {};
