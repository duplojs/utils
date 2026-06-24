import { DataParserNullableExtended } from "./base";
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
 * const withCoalescing = DPE.number().nullable().default(0);
 * const coalesced = withCoalescing.parse(null);
 * // E.Error<DPE.DataParserError> | E.Success<number>
 * 
 * const nullableBool = DPE.nullable(DPE.boolean());
 * const boolResult = nullableBool.parse(true);
 * // E.Error<DPE.DataParserError> | E.Success<boolean | null>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/nullable
 * 
 * @namespace DPE
 * 
 */
export declare const nullable: typeof DataParserNullableExtended.create;
