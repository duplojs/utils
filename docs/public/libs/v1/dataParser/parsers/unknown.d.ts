import { type NeverCoalescing, type Kind, type FixDeepFunctionInfer } from "../../common";
import { type DataParserDefinition, type DataParser, type DataParserChecker } from "../base";
import { type AddCheckersToDefinition, type MergeDefinition } from "../../dataParser/types";
import { type CheckerRefineImplementation } from "./refine";
import { type GetPropsWithValueExtends } from "../../object";
export interface DataParserUnknownCheckerCustom {
}
export type DataParserUnknownCheckers = (DataParserUnknownCheckerCustom[GetPropsWithValueExtends<DataParserUnknownCheckerCustom, DataParserChecker>] | CheckerRefineImplementation<unknown>);
export interface DataParserDefinitionUnknown extends DataParserDefinition<DataParserUnknownCheckers> {
}
export declare const unknownKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/unknown", unknown>>;
type _DataParserUnknown<GenericDefinition extends DataParserDefinitionUnknown> = (DataParser<GenericDefinition, unknown, unknown> & Kind<typeof unknownKind.definition>);
export interface DataParserUnknown<GenericDefinition extends DataParserDefinitionUnknown = DataParserDefinitionUnknown> extends _DataParserUnknown<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserUnknownCheckers,
        ...DataParserUnknownCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserUnknownCheckers,
        ...DataParserUnknownCheckers[]
    ], GenericChecker>): DataParserUnknown<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends DataParserDefinitionUnknown>(definition: GenericDefinition): DataParserUnknown<MergeDefinition<DataParserDefinitionUnknown, GenericDefinition>>;
}
export declare function unknown<const GenericDefinition extends Partial<DataParserDefinitionUnknown> = never>(definition?: GenericDefinition): DataParserUnknown<MergeDefinition<DataParserDefinitionUnknown, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace unknown {
    var overrideHandler: import("../../common").OverrideHandler<DataParserUnknown<DataParserDefinitionUnknown>>;
}
export {};
