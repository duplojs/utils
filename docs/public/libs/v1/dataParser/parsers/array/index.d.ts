import { type NeverCoalescing, type Kind } from "../../../common";
import { type DataParserDefinition, type DataParser, type Output, type Input } from "../../base";
import { type AddCheckersToDefinition, type DataParsers, type MergeDefinition } from "../../types";
import { type DataParserCheckerArrayMin, type DataParserCheckerArrayMax } from "./checkers";
export * from "./checkers";
export type DataParserArrayCheckers = (DataParserCheckerArrayMin | DataParserCheckerArrayMax);
export interface DataParserDefinitionArray extends DataParserDefinition<DataParserArrayCheckers> {
    readonly element: DataParsers;
}
export declare const dataParserArrayKind: import("../../../common").KindHandler<import("../../../common").KindDefinition<"@DuplojsUtilsDataParser/array", unknown>>;
type _DataParserArray<GenericDefinition extends DataParserDefinitionArray> = (DataParser<GenericDefinition, Output<GenericDefinition["element"]>[], Input<GenericDefinition["element"]>[]> & Kind<typeof dataParserArrayKind.definition>);
export interface DataParserArray<GenericDefinition extends DataParserDefinitionArray = DataParserDefinitionArray> extends _DataParserArray<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserArrayCheckers,
        ...DataParserArrayCheckers[]
    ]>(...args: GenericChecker): DataParserArray<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
}
export declare function array<GenericElement extends DataParsers, const GenericDefinition extends Partial<Omit<DataParserDefinitionArray, "element">> = never>(element: GenericElement, definition?: GenericDefinition): DataParserArray<MergeDefinition<DataParserDefinitionArray, NeverCoalescing<GenericDefinition, {}> & {
    element: GenericElement;
}>>;
