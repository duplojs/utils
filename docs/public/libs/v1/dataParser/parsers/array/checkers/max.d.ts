import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../../dataParser/base";
export interface DataParserCheckerDefinitionArrayMax extends DataParserCheckerDefinition {
    max: number;
}
export declare const checkerArrayMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-array-max", unknown>>;
type _DataParserCheckerArrayMax = (Kind<typeof checkerArrayMaxKind.definition> & DataParserChecker<DataParserCheckerDefinitionArrayMax, unknown[]>);
export interface DataParserCheckerArrayMax extends _DataParserCheckerArrayMax {
}
export declare function checkerArrayMax(max: number, definition?: Partial<Omit<DataParserCheckerDefinitionArrayMax, "max">>): DataParserCheckerArrayMax;
export {};
