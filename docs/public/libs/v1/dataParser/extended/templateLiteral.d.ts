import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserTemplateLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral> = (Kind<typeof dataParsers.templateLiteralKind.definition> & DataParserExtended<GenericDefinition, dataParsers.TemplateLiteralShapeOutput<GenericDefinition["template"]>, dataParsers.TemplateLiteralShapeInput<GenericDefinition["template"]>>);
export interface DataParserTemplateLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral = dataParsers.DataParserDefinitionTemplateLiteral> extends _DataParserTemplateLiteralExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserTemplateLiteralCheckers<Output<this>>,
        ...dataParsers.DataParserTemplateLiteralCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserTemplateLiteralCheckers<Output<this>>,
        ...dataParsers.DataParserTemplateLiteralCheckers<Output<this>>[]
    ], GenericChecker>): DataParserTemplateLiteralExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral>(definition: GenericDefinition): DataParserTemplateLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionTemplateLiteral, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserTemplateLiteralExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
}
/**
 * Creates an extended data parser for deterministic template literal strings.
 * 
 * **Supported call styles:**
 * - Method: `DPE.templateLiteral(template, definition?)` -> returns a template literal parser
 * 
 * Validates that the input matches the provided template literal shape.
 * 
 * ```ts
 * const parser = DPE.templateLiteral(["user-", DPE.number()]);
 * const result = parser.parse("user-42");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string
 * }
 * 
 * const orderParser = DPE.templateLiteral(["order-", DPE.literal("vip"), "-", DPE.number()]);
 * const orderResult = orderParser.parse("order-vip-12");
 * 
 * const withLiteral = DPE.templateLiteral([DPE.literal("id-"), DPE.number()]);
 * const literalResult = withLiteral.parse("id-1");
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/templateLiteral
 * 
 * @namespace DPE
 * 
 */
export declare function templateLiteral<const GenericTemplate extends dataParsers.TemplateLiteralShape, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionTemplateLiteral, "template" | "pattern">> = never>(template: GenericTemplate, definition?: GenericDefinition): DataParserTemplateLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionTemplateLiteral, NeverCoalescing<GenericDefinition, {}> & {
    template: GenericTemplate;
}>>;
export declare namespace templateLiteral {
    var overrideHandler: import("../../common").OverrideHandler<DataParserTemplateLiteralExtended<dataParsers.DataParserDefinitionTemplateLiteral>>;
}
export {};
