import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParserError } from "../../../../dataParser/error";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionBigIntMax extends DataParserCheckerDefinition {
    max: bigint;
}
export declare const checkerBigIntMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-bigint-max", unknown>>;
declare const DataParserCheckerBigIntMax_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-bigint-max", unknown>>>;
export declare class DataParserCheckerBigIntMax extends DataParserCheckerBigIntMax_base<DataParserCheckerDefinitionBigIntMax, bigint> {
    get classConstructor(): typeof DataParserCheckerBigIntMax & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(value: bigint, error: DataParserError, self: DataParserCheckerBigIntMax, dataParser: DataParser): unknown;
    static create(max: bigint, definition?: Partial<Omit<DataParserCheckerDefinitionBigIntMax, "max">>): DataParserCheckerBigIntMax;
}
export declare const checkerBigIntMax: typeof DataParserCheckerBigIntMax.create;
export {};
