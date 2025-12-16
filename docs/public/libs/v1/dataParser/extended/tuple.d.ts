import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output } from "../base";
type _DataParserTupleExtended<GenericDefinition extends dataParsers.DataParserDefinitionTuple> = (Kind<typeof dataParsers.tupleKind.definition> & DataParserExtended<GenericDefinition, Output<dataParsers.DataParserTuple<GenericDefinition>>, Input<dataParsers.DataParserTuple<GenericDefinition>>>);
export interface DataParserTupleExtended<GenericDefinition extends dataParsers.DataParserDefinitionTuple = dataParsers.DataParserDefinitionTuple> extends _DataParserTupleExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserTupleCheckers<Output<this>>,
        ...dataParsers.DataParserTupleCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserTupleCheckers<Output<this>>,
        ...dataParsers.DataParserTupleCheckers<Output<this>>[]
    ], GenericChecker>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionTuple>(definition: GenericDefinition): DataParserTupleExtended<MergeDefinition<dataParsers.DataParserDefinitionTuple, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
    min(min: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMin, "min">>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerArrayMin
    ]>>;
    max(max: number, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionArrayMax, "max">>): DataParserTupleExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.DataParserCheckerArrayMax
    ]>>;
}
export declare function tuple<GenericShape extends dataParsers.TupleShape, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTuple, "shape">> = never>(shape: GenericShape, definition?: GenericDefinition): DataParserTupleExtended<MergeDefinition<dataParsers.DataParserDefinitionTuple, NeverCoalescing<GenericDefinition, {}> & {
    shape: GenericShape;
}>>;
export declare namespace tuple {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTupleExtended<dataParsers.DataParserDefinitionTuple>>;
}
export {};
