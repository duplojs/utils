import { type FalsyValue } from "./types";
export type TruthyValue<GenericInput extends unknown> = Exclude<GenericInput, FalsyValue>;
/**
 * The truthy() function is a type guard that keeps only truthy values (false, 0, "", null, undefined are excluded).
 * 
 * Signature: `truthy(input)` → returns a value
 * 
 * Acts as a type guard and narrows the input type when true.
 * 
 * ```ts
 * const values = [
 * 	0,
 * 	1,
 * 	2,
 * 	"",
 * 	"toto",
 * 	null,
 * ] as const;
 * 
 * const result = A.filter(values, truthy);
 * 
 * // type: (1 | 2 | "toto")[]
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/truthy
 * 
 */
export declare function truthy<GenericInput extends unknown>(input: GenericInput): input is TruthyValue<GenericInput>;
