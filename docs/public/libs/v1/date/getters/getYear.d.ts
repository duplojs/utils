import { type TheDate, type Timezone } from "..";
/**
 * Returns the year of a date.
 * 
 * Signature: `getYear(input, timezone)` → returns a value
 * 
 * If timezone is omitted, UTC is used.
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = D.create("2024-06-20");
 * const result = D.getYear(input);
 * // result: 2024
 * 
 * const result2 = D.getYear(input, "Europe/Paris");
 * // result2: 2024
 * 
 * pipe(
 * 	input,
 * 	D.getYear,
 * ); // result: 2024
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getYear
 * 
 * @namespace D
 * 
 */
export declare function getYear<GenericInput extends TheDate>(input: GenericInput, timezone?: Timezone): number;
