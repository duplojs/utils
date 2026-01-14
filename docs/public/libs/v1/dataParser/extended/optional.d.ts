import { type FixDeepFunctionInfer, type IsEqual, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";
type _DataParserOptionalExtended<GenericDefinition extends dataParsers.DataParserDefinitionOptional> = (Kind<typeof dataParsers.optionalKind.definition> & DataParserExtended<GenericDefinition, IsEqual<GenericDefinition["coalescingValue"], unknown> extends true ? Output<GenericDefinition["inner"]> | undefined : Output<GenericDefinition["inner"]>, Input<GenericDefinition["inner"]> | undefined>);
export interface DataParserOptionalExtended<GenericDefinition extends dataParsers.DataParserDefinitionOptional = dataParsers.DataParserDefinitionOptional> extends _DataParserOptionalExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserOptionalCheckers<Output<this>>,
        ...dataParsers.DataParserOptionalCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserOptionalCheckers<Output<this>>,
        ...dataParsers.DataParserOptionalCheckers<Output<this>>[]
    ], GenericChecker>): DataParserOptionalExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserOptionalExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended optional parser from another parser.
 * 
 * **Supported call styles:**
 * - Method: `DPE.optional(inner, definition?)` -> returns an optional parser
 * 
 * Returns undefined (or a coalescing value) when input is undefined, otherwise parses with the inner parser.
 * 
 * ```ts
 * const parser = DPE.optional(DPE.string());
 * const result = parser.parse(undefined);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string | undefined
 * }
 * 
 * const withCoalescing = DPE.optional(DPE.number(), { coalescingValue: 0 });
 * const coalesced = withCoalescing.parse(undefined);
 * 
 * const optionalBool = DPE.optional(DPE.boolean());
 * const boolResult = optionalBool.parse(true);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/optional
 * 
 * @namespace DPE
 * 
 */
export declare function optional<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionOptional<Output<GenericDataParser> | undefined>, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserOptionalExtended<MergeDefinition<dataParsers.DataParserDefinitionOptional, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export declare namespace optional {
    var overrideHandler: import("../../common").OverrideHandler<DataParserOptionalExtended<dataParsers.DataParserDefinitionOptional<unknown>>>;
}
export {};
