import { type StringLength } from "./types/stringLength";
/**
 * Returns the length of a string.
 * 
 * Signature: `length(input)` → returns the string length
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.length("DuploJS"); // 7
 * 
 * pipe(
 * 	"TypeScript",
 * 	S.length,
 * ); // 10
 * 
 * S.length(""); // 0
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/length
 * 
 * @namespace S
 * 
 */
export declare function length<GenericInput extends string>(input: GenericInput): StringLength<GenericInput>;
