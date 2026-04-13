import { type NeverCoalescing, type Kind, type SimplifyTopLevel } from "../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../dataParser/base";
export interface DataParserCheckerDefinitionRefine<GenericInput extends unknown = unknown> extends DataParserCheckerDefinition {
    theFunction(input: GenericInput): boolean;
}
export declare const dataParserCheckerRefineKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/refine", unknown>>;
type _DataParserCheckerRefine<GenericDefinition extends DataParserCheckerDefinitionRefine, GenericInput extends Parameters<GenericDefinition["theFunction"]>[0] = Parameters<GenericDefinition["theFunction"]>[0]> = (Kind<typeof dataParserCheckerRefineKind.definition> & DataParserChecker<GenericDefinition, GenericInput>);
export interface DataParserCheckerRefine<GenericDefinition extends DataParserCheckerDefinitionRefine = DataParserCheckerDefinitionRefine, GenericInput extends Parameters<GenericDefinition["theFunction"]>[0] = Parameters<GenericDefinition["theFunction"]>[0]> extends _DataParserCheckerRefine<GenericDefinition, GenericInput> {
}
export declare function checkerRefine<GenericInput extends unknown, const GenericDefinition extends Partial<Omit<DataParserCheckerDefinitionRefine, "theFunction">> = never>(theFunction: (input: GenericInput) => boolean, definition?: GenericDefinition): DataParserCheckerRefine<SimplifyTopLevel<NeverCoalescing<GenericDefinition, DataParserCheckerDefinitionRefine<GenericInput>> & {
    theFunction(input: GenericInput): boolean;
}>, GenericInput>;
export type CheckerRefineImplementation<GenericInput extends unknown> = DataParserCheckerRefine<DataParserCheckerDefinitionRefine<GenericInput>>;
export {};
