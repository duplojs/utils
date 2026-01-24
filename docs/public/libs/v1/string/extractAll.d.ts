import type { ExtractResult } from "./extract";
/**
 * Extracts details about all matches of a pattern in a string.
 * 
 * **Supported call styles:**
 * - Classic: `extractAll(input, pattern)` → returns a generator of ExtractResult
 * - Curried: `extractAll(pattern)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * pipe(
 * 	"id=1; id=2",
 * 	S.extractAll(/id=(\d+)/g),
 * 	A.from,
 * ); // [{ ... }, { ... }]
 * 
 * S.extractAll("hello", /\d+/g); // Generator
 * 
 * pipe(
 * 	"a1b2",
 * 	S.extractAll(/(\d)/g),
 * 	A.from,
 * 	A.map((value) => value.matchedValue),
 * ); // ["1", "2"]
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.matchAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/extractAll
 * 
 * @namespace S
 * 
 */
export declare function extractAll<GenericInput extends string>(pattern: RegExp): (input: GenericInput) => Generator<ExtractResult>;
export declare function extractAll<GenericInput extends string>(input: GenericInput, pattern: RegExp): Generator<ExtractResult>;
