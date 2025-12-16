import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";
type _DataParserRecoverExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecover> = (Kind<typeof dataParsers.recoverKind.definition> & DataParserExtended<GenericDefinition, GenericDefinition["recoveredValue"], Input<GenericDefinition["inner"]>>);
export interface DataParserRecoverExtended<GenericDefinition extends dataParsers.DataParserDefinitionRecover = dataParsers.DataParserDefinitionRecover> extends _DataParserRecoverExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserRecoverCheckers<Output<this>>,
        ...dataParsers.DataParserRecoverCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserRecoverCheckers<Output<this>>,
        ...dataParsers.DataParserRecoverCheckers<Output<this>>[]
    ], GenericChecker>): DataParserRecoverExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionRecover>(definition: GenericDefinition): DataParserRecoverExtended<MergeDefinition<dataParsers.DataParserDefinitionRecover, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserRecoverExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function recover<GenericDataParser extends DataParser, GenericRecoveredValue extends unknown, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionRecover, "inner" | "recoveredValue">> = never>(inner: GenericDataParser, recoveredValue: GenericRecoveredValue, definition?: GenericDefinition): DataParserRecoverExtended<MergeDefinition<dataParsers.DataParserDefinitionRecover, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
    recoveredValue: GenericRecoveredValue;
}>>;
export declare namespace recover {
    var overrideHandler: import("../../common").OverrideHandler<DataParserRecoverExtended<dataParsers.DataParserDefinitionRecover>>;
}
export {};
