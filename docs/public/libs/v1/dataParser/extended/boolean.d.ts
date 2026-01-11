import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserBooleanExtended<GenericDefinition extends dataParsers.DataParserDefinitionBoolean> = (Kind<typeof dataParsers.booleanKind.definition> & DataParserExtended<GenericDefinition, boolean, boolean>);
export interface DataParserBooleanExtended<GenericDefinition extends dataParsers.DataParserDefinitionBoolean = dataParsers.DataParserDefinitionBoolean> extends _DataParserBooleanExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserBooleanCheckers,
        ...dataParsers.DataParserBooleanCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserBooleanCheckers,
        ...dataParsers.DataParserBooleanCheckers[]
    ], GenericChecker>): DataParserBooleanExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    /**
     * @deprecated Method with unreliable typing.
     */
    construct<const GenericDefinition extends dataParsers.DataParserDefinitionBoolean>(definition: GenericDefinition): DataParserBooleanExtended<MergeDefinition<dataParsers.DataParserDefinitionBoolean, GenericDefinition>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserBooleanExtended<AddCheckersToDefinition<GenericDefinition, [
        dataParsers.CheckerRefineImplementation<Output<this>>
    ]>>;
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
export declare function boolean<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionBoolean> = never>(definition?: GenericDefinition): DataParserBooleanExtended<MergeDefinition<dataParsers.DataParserDefinitionBoolean, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace boolean {
    var overrideHandler: import("../../common").OverrideHandler<DataParserBooleanExtended<dataParsers.DataParserDefinitionBoolean>>;
}
export {};
