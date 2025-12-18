import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../types";
import { type DataParserCheckerInt, type DataParserCheckerNumberMin, type DataParserCheckerNumberMax } from "./checkers";
import { type CheckerRefineImplementation } from "../refine";
import { type GetPropsWithValueExtends } from "../../../object";
export * from "./checkers";
export interface DataParserNumberCheckerCustom {
}
export type DataParserNumberCheckers = (DataParserNumberCheckerCustom[GetPropsWithValueExtends<DataParserNumberCheckerCustom, DataParserChecker>] | DataParserCheckerInt | DataParserCheckerNumberMin | DataParserCheckerNumberMax | CheckerRefineImplementation<number>);
export interface DataParserDefinitionNumber extends DataParserDefinition<DataParserNumberCheckers> {
    readonly coerce: boolean;
}
export declare const numberKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/number", unknown>>;
type _DataParserNumber<GenericDefinition extends DataParserDefinitionNumber> = (DataParser<GenericDefinition, number, number> & Kind<typeof numberKind.definition>);
export interface DataParserNumber<GenericDefinition extends DataParserDefinitionNumber = DataParserDefinitionNumber> extends _DataParserNumber<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserNumberCheckers,
        ...DataParserNumberCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserNumberCheckers,
        ...DataParserNumberCheckers[]
    ], GenericChecker>): DataParserNumber<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    construct<const GenericDefinition extends DataParserDefinitionNumber>(definition: GenericDefinition): DataParserNumber<MergeDefinition<DataParserDefinitionNumber, GenericDefinition>>;
}
export declare function number<const GenericDefinition extends Partial<DataParserDefinitionNumber> = never>(definition?: GenericDefinition): DataParserNumber<MergeDefinition<DataParserDefinitionNumber, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace number {
    var overrideHandler: import("../../../common").OverrideHandler<DataParserNumber<DataParserDefinitionNumber>>;
}
