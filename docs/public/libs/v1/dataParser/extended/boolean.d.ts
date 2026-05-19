import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserBaseExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition, type PrepareDataParserDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParserChecker } from "../base";
type _DataParserBooleanExtended<GenericDefinition extends dataParsers.DataParserDefinitionBoolean> = (Kind<typeof dataParsers.booleanKind.definition> & DataParserBaseExtended<GenericDefinition, Output<dataParsers.DataParserBoolean<GenericDefinition>>, Input<dataParsers.DataParserBoolean<GenericDefinition>>>);
export interface DataParserBooleanExtended<GenericDefinition extends dataParsers.DataParserDefinitionBoolean = dataParsers.DataParserDefinitionBoolean> extends _DataParserBooleanExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        DataParserChecker<Output<this>>,
        ...DataParserChecker<Output<this>>[]
    ], GenericChecker>): DataParserBooleanExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserBooleanExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended data parser for boolean values.
 * 
 * **Supported call styles:**
 * - Method: `DPE.boolean(definition?)` -> returns a boolean parser
 * 
 * Validates boolean values and can be combined with extended helpers like optional or nullable.
 * 
 * ```ts
 * const parser = DPE.boolean();
 * const result = parser.parse(true);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: boolean
 * }
 * 
 * const coerceParser = DPE.coerce.boolean();
 * const coerceResult = coerceParser.parse("false");
 * 
 * const optionalBool = DPE.boolean().optional();
 * const optionalResult = optionalBool.parse(undefined);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/boolean
 * 
 * @namespace DPE
 * 
 */
export declare function boolean<const GenericDefinition extends PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean> = never>(definition?: FixDeepFunctionInfer<PrepareDataParserDefinition<dataParsers.DataParserDefinitionBoolean>, GenericDefinition>): DataParserBooleanExtended<MergeDefinition<dataParsers.DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace boolean {
    var overrideHandler: import("../../common").OverrideHandler<DataParserBooleanExtended<dataParsers.DataParserDefinitionBoolean>>;
}
export {};
