import { type NormalizeForm } from "./types/normalizeForm";
/**
 * Normalizes a string using the specified Unicode normalization form.
 * 
 * **Supported call styles:**
 * - Classic: `normalize(input, form)` → returns a normalized string
 * - Curried: `normalize(form)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.normalize("CafÃ©", "NFD"); // "Café"
 * 
 * pipe(
 * 	"e\u0301",
 * 	S.normalize("NFC"),
 * ); // "é"
 * 
 * S.normalize("Duplo", "NFKD"); // "Duplo"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.normalize`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/normalize
 * 
 * @namespace S
 * 
 */
export declare function normalize<GenericInput extends string>(form: NormalizeForm): (input: GenericInput) => string;
export declare function normalize<GenericInput extends string>(input: GenericInput, form: NormalizeForm): string;
