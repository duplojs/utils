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
    static create<GenericInput extends unknown, GenericPredicate extends GenericInput, const GenericDefinition extends Partial<Omit<DataParserCheckerDefinitionRefine, "theFunction">> = never>(theFunction: (input: GenericInput) => input is GenericPredicate, definition?: GenericDefinition): DataParserCheckerRefine<SimplifyTopLevel<NeverCoalescing<GenericDefinition, Omit<DataParserCheckerDefinitionRefine<GenericInput>, "theFunction">> & {
        theFunction(input: GenericInput): input is GenericPredicate;
    }>, GenericInput>;
    static create<GenericInput extends unknown, const GenericDefinition extends Partial<Omit<DataParserCheckerDefinitionRefine, "theFunction">> = never>(theFunction: (input: GenericInput) => MaybePromise<boolean>, definition?: GenericDefinition): DataParserCheckerRefine<SimplifyTopLevel<NeverCoalescing<GenericDefinition, Omit<DataParserCheckerDefinitionRefine<GenericInput>, "theFunction">> & {
        theFunction(input: GenericInput): MaybePromise<boolean>;
    }>, GenericInput>;
}
/**
 * Creates a custom checker from a boolean predicate or a type predicate.
 * 
 * Use it with `addChecker(...)`, parser definitions, or the extended `refine(...)` API. When the predicate is a TypeScript type guard, the parser output type is refined after validation.
 * 
 * ```ts
 * type OrderCode = `order-${number}`;
 * 
 * const orderCodeChecker = DP.checkerRefine(
 * 	(value: string): value is OrderCode => (
 * 		value.startsWith("order-")
 * 		&& Number.isSafeInteger(Number(value.slice(6)))
 * 	),
 * );
 * 
 * const orderCodeParser = DP
 * 	.string()
 * 	.addChecker(orderCodeChecker);
 * 
 * const result = orderCodeParser.parse("order-42");
 * // E.Error<DP.DataParserError> | E.Success<OrderCode>
 * 
 * const booleanChecker = DP.checkerRefine(
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/refine
 * @namespace DP
 * 
 */
export declare const checkerRefine: typeof DataParserCheckerRefine.create;
export type CheckerRefineImplementation<GenericInput extends unknown> = DataParserCheckerRefine<DataParserCheckerDefinitionRefine<GenericInput>>;
export {};
