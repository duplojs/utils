import { DataParserRecoverExtended } from "./base";
/**
 * Creates an extended data parser that recovers with a fallback value on error.
 * 
 * **Supported call styles:**
 * - Method: `DPE.recover(inner, recoveredValue, definition?)` -> returns a recover parser
 * 
 * Runs the inner parser and returns the recovered value when parsing fails.
 * 
 * ```ts
 * const parser = DPE.recover(DPE.number(), 0);
 * const result = parser.parse("not-a-number");
 * if (E.isRight(result)) {
 * 	const value = unwrap(result);
 * 	// value: number
 * }
 * 
 * const withString = DPE.recover(DPE.string(), "fallback");
 * const stringResult = withString.parse(123);
 * 
 * const okResult = parser.parse(10);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/dataParser/recover
 * 
 * @namespace DPE
 * 
 */
export declare const recover: typeof DataParserRecoverExtended.create;
