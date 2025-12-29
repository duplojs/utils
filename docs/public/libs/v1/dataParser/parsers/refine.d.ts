import { type NeverCoalescing, type Kind } from "../../common";
import { type DataParserCheckerDefinition, type DataParserChecker } from "../../dataParser/base";
import { type AssignObjects } from "../../object";
export interface DataParserCheckerDefinitionRefine extends DataParserCheckerDefinition {
    theFunction(input: unknown): boolean;
}
export declare const dataParserCheckerRefineKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/refine", unknown>>;
type _DataParserCheckerRefine<GenericDefinition extends DataParserCheckerDefinitionRefine> = (Kind<typeof dataParserCheckerRefineKind.definition> & DataParserChecker<GenericDefinition, string>);
export interface DataParserCheckerRefine<GenericDefinition extends DataParserCheckerDefinitionRefine = DataParserCheckerDefinitionRefine> extends _DataParserCheckerRefine<GenericDefinition> {
}
export declare function checkerRefine<GenericInput extends unknown, const GenericDefinition extends Partial<Omit<DataParserCheckerDefinitionRefine, "theFunction">> = never>(theFunction: (input: GenericInput) => boolean, definition?: GenericDefinition): DataParserCheckerRefine<AssignObjects<NeverCoalescing<GenericDefinition, DataParserCheckerDefinitionRefine>, {
    theFunction(input: GenericInput): boolean;
}>>;
export type CheckerRefineImplementation<GenericInput extends unknown> = DataParserCheckerRefine<AssignObjects<DataParserCheckerDefinitionRefine, {
    theFunction(input: GenericInput): boolean;
}>>;
export {};
