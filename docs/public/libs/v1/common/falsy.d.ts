import { type FalsyValue, type UnionContain } from "./types";
/**
 * The falsy() function is a type guard that keeps only falsy values (false, 0, "", null, undefined).
 * 
 * Signature: `falsy(input)` → returns a value
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
 * const result = A.filter(values, falsy);
 * 
 * // type: (0 | "" | null)[]
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/falsy
 * 
 * @namespace C
 * 
 */
export declare function falsy<GenericInput extends unknown>(input: GenericInput): input is (Extract<GenericInput, FalsyValue> | (UnionContain<GenericInput, string> extends true ? "" : never) | (UnionContain<GenericInput, number> extends true ? 0 : never) | (UnionContain<GenericInput, bigint> extends true ? 0n : never));
