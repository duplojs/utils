import { type NeverCoalescing, type Kind } from "../../../common";
import { type DataParserDefinition, type DataParser } from "../../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../../dataParser/types";
import { type DataParserCheckerBigIntMin, type DataParserCheckerBigIntMax } from "./checkers";
export * from "./checkers";
export type DataParserBigIntCheckers = (DataParserCheckerBigIntMin | DataParserCheckerBigIntMax);
export interface DataParserDefinitionBigInt extends DataParserDefinition<DataParserBigIntCheckers> {
    readonly coerce: boolean;
}
export declare const bigIntKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/bigint", unknown>>;
type _DataParserBigInt<GenericDefinition extends DataParserDefinitionBigInt> = (DataParser<GenericDefinition, bigint, bigint> & Kind<typeof bigIntKind.definition>);
export interface DataParserBigInt<GenericDefinition extends DataParserDefinitionBigInt = DataParserDefinitionBigInt> extends _DataParserBigInt<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserBigIntCheckers,
        ...DataParserBigIntCheckers[]
    ]>(...args: GenericChecker): DataParserBigInt<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function bigint<const GenericDefinition extends Partial<DataParserDefinitionBigInt> = never>(definition?: GenericDefinition): DataParserBigInt<MergeDefinition<DataParserDefinitionBigInt, NeverCoalescing<GenericDefinition, {}>>>;
