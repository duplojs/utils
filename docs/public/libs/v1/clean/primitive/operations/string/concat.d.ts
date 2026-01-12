import { type String } from "../../base";
/**
 * Concatenates strings and returns a wrapped String.
 * 
 * **Supported call styles:**
 * - Classic: `concat(input, ...texts)` -> returns a String
 * - Curried: `concat(text)` -> returns a function waiting for the input
 * 
 * Use it to build string values while staying inside the Clean domain.
 * 
 * ```ts
 * const name = C.String.createOrThrow("Duplo");
 * 
 * const full = C.concat(name, "JS");
 * // full: C.String
 * 
 * const curried = pipe(
 * 	name,
 * 	C.concat(" Utils"),
 * );
 * // curried: C.String
 * 
 * const mixed = C.concat(
 * 	C.String.createOrThrow("Hello"),
 * 	" ",
 * 	"World",
 * );
 * // mixed: C.String
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/concat
 * 
 * @namespace C
 * 
 */
export declare function concat(text: String | string): (input: String) => String;
export declare function concat(input: String, ...textsRest: (String | string)[]): String;
