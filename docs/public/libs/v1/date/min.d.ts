import type { AnyTuple } from "../common/types/anyTuple";
import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types";
/**
 * Returns the smallest date from a tuple of date values.
 * 
 * Signature: `min(input)` → `TheDate`
 * 
 * ```ts
 * const input = [
 * 	D.create("2024-06-20"),
 * 	"date1718668800000+",
 * 	D.create("2024-06-25"),
 * ] as const;
 * 
 * const value = D.min(input);
 * // value: TheDate
 * 
 * pipe(
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/min
 * 
 * @namespace D
 * 
 */
export declare function min<GenericInput extends AnyTuple<TheDate | SerializedTheDate>>(input: GenericInput): TheDate;
