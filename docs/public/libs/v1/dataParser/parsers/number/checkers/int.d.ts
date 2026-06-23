import { type DataParserError } from "../../../../dataParser/error";
import { type DataParserCheckerDefinition } from "../../../baseChecker";
import { type DataParser } from "../../../base";
export interface DataParserCheckerDefinitionInt extends DataParserCheckerDefinition {
}
export declare const checkerIntKind: import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-number-int", unknown>>;
declare const DataParserCheckerInt_base: import("../../..").DataParserCheckerBaseInit<import("../../../../common").KindHandler<import("../../../../common").KindDefinition<"@DuplojsUtilsDataParser/checker-number-int", unknown>>>;
export declare class DataParserCheckerInt extends DataParserCheckerInt_base<DataParserCheckerDefinitionInt, number> {
    get classConstructor(): typeof DataParserCheckerInt & import("../../..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(data: number, error: DataParserError, self: DataParserCheckerInt, dataParser: DataParser): unknown;
    static create(definition?: Partial<DataParserCheckerDefinitionInt>): DataParserCheckerInt;
}
export declare const checkerInt: typeof DataParserCheckerInt.create;
export declare function int(definition?: Partial<DataParserCheckerDefinitionInt>): import("..").DataParserNumber<{
    readonly checkers: readonly [DataParserCheckerInt];
    readonly errorMessage?: string | undefined;
    readonly coerce: boolean;
}>;
export {};
