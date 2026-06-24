import { DataParserUnionExtended } from "./base";
/**
 * Creates an extended data parser that accepts one of multiple parsers.
 * 
 * **Supported call styles:**
 * - Method: `DPE.union(options, definition?)` -> returns a union parser
 * 
 * Tries each option in order until one succeeds, then returns its output.
 * 
 * ```ts
 * const parser = DPE.union([DPE.string(), DPE.number()]);
 * const result = parser.parse("hello");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: string | number
 * }
 * 
 * const literals = DPE.union([DPE.literal("on"), DPE.literal("off")]);
 * const literalResult = literals.parse("off");
 * 
 * const mixed = DPE.union([DPE.number(), DPE.boolean()]);
 * const mixedResult = mixed.parse(true);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/union
 * 
 * @namespace DPE
 * 
 */
export declare const union: typeof DataParserUnionExtended.create;
