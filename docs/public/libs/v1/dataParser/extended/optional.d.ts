import { DataParserOptionalExtended } from "./base";
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
 * const withCoalescing = DPE.number().optional().default(0);
 * const coalesced = withCoalescing.parse(undefined);
 * // E.Error<DPE.DataParserError> | E.Success<number>
 * 
 * const optionalBool = DPE.optional(DPE.boolean());
 * const boolResult = optionalBool.parse(true);
 * // E.Error<DPE.DataParserError> | E.Success<boolean | undefined>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/optional
 * 
 * @namespace DPE
 * 
 */
export declare const optional: typeof DataParserOptionalExtended.create;
