import { type AnyTuple } from "../common";
import { type TheDate } from "./types";
/**
 * Returns the earliest date from an iterable.
 * 
 * Signature: `min(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = [D.yesterday(), D.today(), D.tomorrow()] as const;
 * 
 * const result = D.min(input);
 * 
 * pipe(
 * 	input,
 * 	D.min,
 * );
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/min
 * 
 * @namespace D
 * 
 */
export declare function min<GenericInput extends AnyTuple<TheDate>>(input: GenericInput): `date${number}-` | `date${number}+`;
