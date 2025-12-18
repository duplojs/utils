import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
export interface DataParserCheckerDefinitionBigIntMin extends DataParserCheckerDefinition {
    min: bigint;
}
export declare const checkerBigIntMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-bigint-min", unknown>>;
type _DataParserCheckerBigIntMin = (Kind<typeof checkerBigIntMinKind.definition> & DataParserChecker<DataParserCheckerDefinitionBigIntMin, bigint>);
export interface DataParserCheckerBigIntMin extends _DataParserCheckerBigIntMin {
}
export declare function checkerBigIntMin(min: bigint, definition?: Partial<Omit<DataParserCheckerDefinitionBigIntMin, "min">>): DataParserCheckerBigIntMin;
export {};
