import { type Kind } from "../../../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../../base";
export interface DataParserCheckerDefinitionBigIntMax extends DataParserCheckerDefinition {
    max: bigint;
}
export declare const dataParserCheckerBigIntMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"data-parser-checker-bigint-max", unknown>>;
type _DataParserCheckerBigIntMax = (Kind<typeof dataParserCheckerBigIntMaxKind.definition> & DataParserChecker<DataParserCheckerDefinitionBigIntMax, bigint>);
export interface DataParserCheckerBigIntMax extends _DataParserCheckerBigIntMax {
}
export declare function checkerBigIntMax(max: bigint, definition?: Partial<Omit<DataParserCheckerDefinitionBigIntMax, "max">>): DataParserCheckerBigIntMax;
export {};
