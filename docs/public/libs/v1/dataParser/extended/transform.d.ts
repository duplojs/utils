import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type DataParser, type Input, type Output } from "../base";
import { type DataParserError } from "../error";
type _DataParserTransformExtended<GenericDefinition extends dataParsers.DataParserDefinitionTransform> = (Kind<typeof dataParsers.transformKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserTransform<GenericDefinition>>, Input<dataParsers.DataParserTransform<GenericDefinition>>>);
export interface DataParserTransformExtended<GenericDefinition extends dataParsers.DataParserDefinitionTransform = dataParsers.DataParserDefinitionTransform> extends _DataParserTransformExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserTransformCheckers<Output<this>>,
        ...dataParsers.DataParserTransformCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserTransformCheckers<Output<this>>,
        ...dataParsers.DataParserTransformCheckers<Output<this>>[]
    ], GenericChecker>): DataParserTransformExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserTransformExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended transform parser from another parser.
 * 
 * **Supported call styles:**
 * - Method: `DPE.transform(inner, theFunction, definition?)` -> returns a transform parser
 * 
 * Runs the inner parser and applies a transformation function to its output.
 * 
 * ```ts
 * const parser = DPE.transform(DPE.string(), (value) => value.length);
 * const result = parser.parse("Duplo");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const toUpper = DPE.transform(DPE.string(), (value) => value.toUpperCase());
 * const upperResult = toUpper.parse("duplo");
 * 
 * const double = DPE.transform(DPE.number(), (value) => value * 2);
 * const doubleResult = double.parse(3);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/transform
 * 
 * @namespace DPE
 * 
 */
export declare function transform<GenericDataParser extends DataParser, GenericOutput extends unknown, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTransform, "inner" | "theFunction">> = never>(inner: GenericDataParser, theFunction: (input: Output<GenericDataParser>, error: DataParserError) => GenericOutput, definition?: GenericDefinition): DataParserTransformExtended<MergeDefinition<dataParsers.DataParserDefinitionTransform, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
    theFunction(input: Output<GenericDataParser>): GenericOutput;
}>>;
export declare namespace transform {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTransformExtended<dataParsers.DataParserDefinitionTransform>>;
}
export {};
