import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser, type Output } from "../base";
import { type DataParserError } from "../error";
type _DataParserTransformExtended<GenericDefinition extends dataParsers.DataParserDefinitionTransform> = (dataParsers.DataParserTransform<GenericDefinition> & DataParserExtended);
export interface DataParserTransformExtended<GenericDefinition extends dataParsers.DataParserDefinitionTransform = dataParsers.DataParserDefinitionTransform> extends _DataParserTransformExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserTransformCheckers<Output<this>>,
        ...dataParsers.DataParserTransformCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserTransformCheckers<Output<this>>,
        ...dataParsers.DataParserTransformCheckers<Output<this>>[]
    ], GenericChecker>): DataParserTransformExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserTransformExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function transform<GenericDataParser extends DataParser, GenericOutput extends unknown, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction">> = never>(inner: GenericDataParser, theFunction: (input: Output<GenericDataParser>, error: DataParserError) => GenericOutput, definition?: GenericDefinition): DataParserTransformExtended<MergeDefinition<dataParsers.DataParserDefinitionTransform, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
    theFunction(input: Output<GenericDataParser>): GenericOutput;
}>>;
export {};
