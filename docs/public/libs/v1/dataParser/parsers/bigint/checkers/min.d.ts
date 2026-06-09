import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionBigIntMin extends DataParserCheckerDefinition {
    min: bigint;
}
export declare const checkerBigIntMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-bigint-min", unknown>>;
declare const DataParserCheckerBigIntMin_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-bigint-min", unknown>>>;
export declare class DataParserCheckerBigIntMin extends DataParserCheckerBigIntMin_base<DataParserCheckerDefinitionBigIntMin, bigint> {
    get classConstructor(): typeof DataParserCheckerBigIntMin & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(value: bigint, error: DataParserError, self: DataParserCheckerBigIntMin, dataParser: DataParser): bigint | typeof import("../../../../dataParser/error").SymbolDataParserError;
    static create(min: bigint, definition?: Partial<Omit<DataParserCheckerDefinitionBigIntMin, "min">>): DataParserCheckerBigIntMin;
}
export declare const checkerBigIntMin: typeof DataParserCheckerBigIntMin.create;
export {};
