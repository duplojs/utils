import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionNumberMin extends DataParserCheckerDefinition {
    min: number;
    exclusive: boolean;
}
export declare const checkerNumberMinKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-number-min", unknown>>;
declare const DataParserCheckerNumberMin_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-number-min", unknown>>>;
export declare class DataParserCheckerNumberMin extends DataParserCheckerNumberMin_base<DataParserCheckerDefinitionNumberMin, number> {
    get classConstructor(): typeof DataParserCheckerNumberMin & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(value: number, error: DataParserError, self: DataParserCheckerNumberMin, dataParser: DataParser): unknown;
    static create(min: number, definition?: Partial<Omit<DataParserCheckerDefinitionNumberMin, "min">>): DataParserCheckerNumberMin;
}
export declare const checkerNumberMin: typeof DataParserCheckerNumberMin.create;
export {};
