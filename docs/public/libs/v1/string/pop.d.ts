import type { Pop } from "./types";
/**
 * Removes the last character from a string.
 * 
 * Signature: `pop(input)` -> returns a new string
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.pop("Duplo"); // "Dupl"
 * 
 * S.pop("A"); // ""
 * 
 * S.pop(""); // ""
 * ```
 * 
 * @remarks
 * - Type-safe with literal strings: return type removes the last character when possible.
 * 
 * @see [`S.shift`](https://utils.duplojs.dev/en/v1/api/string/shift) For removing the first character
 * @see https://utils.duplojs.dev/en/v1/api/string/pop
 * 
 * @namespace S
 * 
 */
export declare function pop<GenericInput extends string>(input: GenericInput): Pop<GenericInput>;
