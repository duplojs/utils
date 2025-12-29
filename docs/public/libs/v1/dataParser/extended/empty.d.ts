import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserEmptyExtended<GenericDefinition extends dataParsers.DataParserDefinitionEmpty> = (Kind<typeof dataParsers.emptyKind.definition> & DataParserExtended<GenericDefinition, undefined, undefined>);
export interface DataParserEmptyExtended<GenericDefinition extends dataParsers.DataParserDefinitionEmpty = dataParsers.DataParserDefinitionEmpty> extends _DataParserEmptyExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserEmptyCheckers,
        ...dataParsers.DataParserEmptyCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserEmptyCheckers,
        ...dataParsers.DataParserEmptyCheckers[]
    ], GenericChecker>): DataParserEmptyExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionEmpty>(definition: GenericDefinition): DataParserEmptyExtended<MergeDefinition<dataParsers.DataParserDefinitionEmpty, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserEmptyExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
export declare function empty<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionEmpty> = never>(definition?: GenericDefinition): DataParserEmptyExtended<MergeDefinition<dataParsers.DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace empty {
    var overrideHandler: import("../../common").OverrideHandler<DataParserEmptyExtended<dataParsers.DataParserDefinitionEmpty>>;
}
export {};
