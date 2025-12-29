import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserNilExtended<GenericDefinition extends dataParsers.DataParserDefinitionNil> = (Kind<typeof dataParsers.nilKind.definition> & DataParserExtended<GenericDefinition, null, null>);
export interface DataParserNilExtended<GenericDefinition extends dataParsers.DataParserDefinitionNil = dataParsers.DataParserDefinitionNil> extends _DataParserNilExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserNilCheckers,
        ...dataParsers.DataParserNilCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserNilCheckers,
        ...dataParsers.DataParserNilCheckers[]
    ], GenericChecker>): DataParserNilExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionNil>(definition: GenericDefinition): DataParserNilExtended<MergeDefinition<dataParsers.DataParserDefinitionNil, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserNilExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function nil<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionNil> = never>(definition?: GenericDefinition): DataParserNilExtended<MergeDefinition<dataParsers.DataParserDefinitionNil, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace nil {
    var overrideHandler: import("../../common").OverrideHandler<DataParserNilExtended<dataParsers.DataParserDefinitionNil>>;
}
export {};
