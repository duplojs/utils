import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionArrayMax<GenericMax extends number = number> extends DataParserCheckerDefinition {
    max: GenericMax;
}
export declare const checkerArrayMaxKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-array-max", unknown>>;
declare const DataParserCheckerArrayMax_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-array-max", unknown>>>;
export declare class DataParserCheckerArrayMax<GenericMax extends number = number> extends DataParserCheckerArrayMax_base<DataParserCheckerDefinitionArrayMax<GenericMax>, unknown[]> {
    get classConstructor(): typeof DataParserCheckerArrayMax & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: unknown[], error: DataParserError, self: DataParserCheckerArrayMax, dataParser: DataParser): unknown;
    static create<GenericMax extends number>(max: GenericMax, definition?: Partial<Omit<DataParserCheckerDefinitionArrayMax, "max">>): DataParserCheckerArrayMax<GenericMax>;
}
export declare const checkerArrayMax: typeof DataParserCheckerArrayMax.create;
export {};
