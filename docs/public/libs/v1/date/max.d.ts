import { type AnyTuple } from "../common";
import { type TheDate } from "./types";
/**
 * Returns the latest date from an iterable.
 * 
 * Signature: `max(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = [D.yesterday(), D.today(), D.tomorrow()] as const;
 * 
 * const result = D.max(input);
 * 
 * pipe(
 * 	input,
 * 	D.max,
 * );
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/max
 * 
 * @namespace D
 * 
 */
export declare function max<GenericInput extends AnyTuple<TheDate>>(input: GenericInput): `date${number}-` | `date${number}+`;
