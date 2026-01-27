import { type FixDeepFunctionInfer, type IsEqual, type Kind, type NeverCoalescing } from "../../common";
import { type DataParserExtended } from "../baseExtended";
import { type AddCheckersToDefinition, type MergeDefinition } from "../types";
import * as dataParsers from "../parsers";
import { type Input, type Output, type DataParser } from "../base";
type _DataParserNullableExtended<GenericDefinition extends dataParsers.DataParserDefinitionNullable> = (Kind<typeof dataParsers.nullableKind.definition> & DataParserExtended<GenericDefinition, IsEqual<GenericDefinition["coalescingValue"], unknown> extends true ? Output<GenericDefinition["inner"]> | null : Output<GenericDefinition["inner"]>, Input<GenericDefinition["inner"]> | null>);
export interface DataParserNullableExtended<GenericDefinition extends dataParsers.DataParserDefinitionNullable = dataParsers.DataParserDefinitionNullable> extends _DataParserNullableExtended<GenericDefinition> {
    addChecker<GenericChecker extends readonly [
        dataParsers.DataParserNullableCheckers<Output<this>>,
        ...dataParsers.DataParserNullableCheckers<Output<this>>[]
    ]>(...args: FixDeepFunctionInfer<readonly [
        dataParsers.DataParserNullableCheckers<Output<this>>,
        ...dataParsers.DataParserNullableCheckers<Output<this>>[]
    ], GenericChecker>): DataParserNullableExtended<AddCheckersToDefinition<GenericDefinition, GenericChecker>>;
    refine(theFunction: (input: Output<this>) => boolean, definition?: Partial<Omit<dataParsers.DataParserCheckerDefinitionRefine, "theFunction">>): DataParserNullableExtended<AddCheckersToDefinition<GenericDefinition, readonly [dataParsers.CheckerRefineImplementation<Output<this>>]>>;
}
/**
 * Creates an extended nullable parser from another parser.
 * 
 * **Supported call styles:**
 * - Method: `DPE.nullable(inner, definition?)` -> returns a nullable parser
 * 
 * Returns null (or a coalescing value) when input is null, otherwise parses with the inner parser.
 * 
 * ```ts
 * const parser = DPE.nullable(DPE.string());
 * const result = parser.parse(null);
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string | null
 * }
 * 
 * const withCoalescing = DPE.nullable(DPE.number(), { coalescingValue: 0 });
 * const coalesced = withCoalescing.parse(null);
 * 
 * const nullableBool = DPE.nullable(DPE.boolean());
 * const boolResult = nullableBool.parse(true);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/nullable
 * 
 * @namespace DPE
 * 
 */
export declare function nullable<GenericDataParser extends DataParser, const GenericDefinition extends Partial<Omit<dataParsers.DataParserDefinitionNullable<Output<GenericDataParser>>, "inner">> = never>(inner: GenericDataParser, definition?: GenericDefinition): DataParserNullableExtended<MergeDefinition<dataParsers.DataParserDefinitionNullable, NeverCoalescing<GenericDefinition, {}> & {
    inner: GenericDataParser;
}>>;
export declare namespace nullable {
    var overrideHandler: import("../../common").OverrideHandler<DataParserNullableExtended<dataParsers.DataParserDefinitionNullable<unknown>>>;
}
export {};
