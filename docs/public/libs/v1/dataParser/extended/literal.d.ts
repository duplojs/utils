import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionLiteral> = (dataParsers.DataParserLiteral<GenericDefinition> & DataParserExtended);
export interface DataParserLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionLiteral = dataParsers.DataParserDefinitionLiteral> extends _DataParserLiteralExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserLiteralCheckers<Output<this>>,
        ...dataParsers.DataParserLiteralCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserLiteralCheckers<Output<this>>,
        ...dataParsers.DataParserLiteralCheckers<Output<this>>[]
    ], GenericChecker>): DataParserLiteralExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserLiteralExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function literal<const GenericValue extends dataParsers.LiteralValue, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionLiteral, "value">> = never>(value: GenericValue | GenericValue[], definition?: GenericDefinition): DataParserLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionLiteral, NeverCoalescing<GenericDefinition, {}> & {
    value: GenericValue[];
}>>;
export {};
