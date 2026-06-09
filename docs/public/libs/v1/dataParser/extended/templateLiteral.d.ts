import { type FixDeepFunctionInfer, type NeverCoalescing } from "../../common";
import { type AddCheckersToDefinition, type Output, type MergeDefinition, type PrepareDataParserDefinition, type Input } from "../types";
import * as dataParsers from "../parsers";
import { type DataParserChecker } from "../baseChecker";
declare const DataParserTemplateLiteralExtended_base: import("..").DataParserExtendedBaseInit<typeof dataParsers.DataParserTemplateLiteral>;
export declare class DataParserTemplateLiteralExtended<GenericDefinition extends dataParsers.DataParserDefinitionTemplateLiteral = dataParsers.DataParserDefinitionTemplateLiteral> extends DataParserTemplateLiteralExtended_base<GenericDefinition, Output<dataParsers.DataParserTemplateLiteral<GenericDefinition>>, Input<dataParsers.DataParserTemplateLiteral<GenericDefinition>>> {
    get classConstructor(): typeof DataParserTemplateLiteralExtended & import("..").CheckedConstructorKind;
    addChecker: <GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>) => DataParserTemplateLiteralExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine: (theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>) => DataParserTemplateLiteralExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
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
    static create<const GenericTemplate extends dataParsers.TemplateLiteralShape, const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionTemplateLiteral<dataParsers.TemplateLiteralShapeOutput<GenericTemplate>>, "template" | "pattern"> = never>(template: GenericTemplate, definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionTemplateLiteral<dataParsers.TemplateLiteralShapeOutput<GenericTemplate>>, "template" | "pattern">, GenericDefinition>): DataParserTemplateLiteralExtended<MergeDefinition<dataParsers.DataParserDefinitionTemplateLiteral, NeverCoalescing<GenericDefinition, {}> & {
        template: GenericTemplate;
    }>>;
}
export declare const templateLiteral: typeof DataParserTemplateLiteralExtended.create;
export {};
