import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../../dataParser/base";
export interface DataParserCheckerDefinitionBigIntMax extends DataParserCheckerDefinition {
    max: bigint;
}
export declare const checkerBigIntMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-bigint-max", unknown>>;
type _DataParserCheckerBigIntMax = (Kind<typeof checkerBigIntMaxKind.definition> & DataParserChecker<DataParserCheckerDefinitionBigIntMax, bigint>);
export interface DataParserCheckerBigIntMax extends _DataParserCheckerBigIntMax {
}
export declare function checkerBigIntMax(max: bigint, definition?: Partial<Omit<DataParserCheckerDefinitionBigIntMax, "max">>): DataParserCheckerBigIntMax;
export {};
