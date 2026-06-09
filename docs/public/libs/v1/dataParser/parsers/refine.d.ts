import { type NeverCoalescing, type SimplifyTopLevel, type MaybePromise } from "../../common";
import { type DataParserCheckerDefinition } from "../baseChecker";
import { type DataParser } from "../base";
import { type DataParserError } from "../../dataParser/error";
export interface DataParserCheckerDefinitionRefine<GenericInput extends unknown = unknown> extends DataParserCheckerDefinition {
    theFunction(input: GenericInput): MaybePromise<boolean>;
}
export declare const dataParserCheckerRefineKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/refine", unknown>>;
declare const DataParserCheckerRefine_base: import("..").DataParserCheckerBaseInit<import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsDataParser/refine", unknown>>>;
export declare class DataParserCheckerRefine<GenericDefinition extends DataParserCheckerDefinitionRefine = DataParserCheckerDefinitionRefine, GenericInput extends Parameters<GenericDefinition["theFunction"]>[0] = Parameters<GenericDefinition["theFunction"]>[0]> extends DataParserCheckerRefine_base<GenericDefinition, GenericInput> {
    get classConstructor(): typeof DataParserCheckerRefine & import("..").CheckedConstructorKind;
    isAsynchronous(): boolean;
    static execCheck(value: unknown, error: DataParserError, self: DataParserCheckerRefine, dataParser: DataParser): unknown;
    static create<GenericInput extends unknown, const GenericDefinition extends Partial<Omit<DataParserCheckerDefinitionRefine, "theFunction">> = never>(theFunction: (input: GenericInput) => MaybePromise<boolean>, definition?: GenericDefinition): DataParserCheckerRefine<SimplifyTopLevel<NeverCoalescing<GenericDefinition, DataParserCheckerDefinitionRefine<GenericInput>> & {
        theFunction(input: GenericInput): MaybePromise<boolean>;
    }>, GenericInput>;
}
export declare const checkerRefine: typeof DataParserCheckerRefine.create;
export type CheckerRefineImplementation<GenericInput extends unknown> = DataParserCheckerRefine<DataParserCheckerDefinitionRefine<GenericInput>>;
export {};
