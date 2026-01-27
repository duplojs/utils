import { type FixDeepFunctionInfer, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Output } from "../base";
type _DataParserEmptyExtended<GenericDefinition extends dataParsers.DataParserDefinitionEmpty> = (Kind<typeof dataParsers.emptyKind.definition> & DataParserExtended<GenericDefinition, undefined, undefined>);
export interface DataParserEmptyExtended<GenericDefinition extends dataParsers.DataParserDefinitionEmpty = dataParsers.DataParserDefinitionEmpty> extends _DataParserEmptyExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserEmptyCheckers,
        ...dataParsers.DataParserEmptyCheckers[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserEmptyCheckers,
        ...dataParsers.DataParserEmptyCheckers[]
    ], GenericChecker>): DataParserEmptyExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserEmptyExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended data parser that accepts undefined.
 * 
 * **Supported call styles:**
 * - Method: `DPE.empty(definition?)` -> returns an empty parser
 * 
 * Accepts undefined (or the string "undefined" when coerce is enabled).
 * 
 * ```ts
 * const parser = DPE.empty();
 * const result = parser.parse(undefined);
 * if (E.isRight(result)) {
 * 	// E.Success<undefined>
 * }
 * 
 * const coerceParser = DPE.coerce.empty();
 * const coerceResult = coerceParser.parse("undefined");
 * 
 * const optionalEmpty = DPE.empty().optional();
 * const optionalResult = optionalEmpty.parse(undefined);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/empty
 * 
 * @namespace DPE
 * 
 */
export declare function empty<const GenericDefinition extends Partial<dataParsers.DataParserDefinitionEmpty> = never>(definition?: GenericDefinition): DataParserEmptyExtended<MergeDefinition<dataParsers.DataParserDefinitionEmpty, NeverCoalescing<GenericDefinition, {}>>>;
export declare namespace empty {
    var overrideHandler: import("../../common").OverrideHandler<DataParserEmptyExtended<dataParsers.DataParserDefinitionEmpty>>;
}
export {};
