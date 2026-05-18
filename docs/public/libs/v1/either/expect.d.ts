import { type Right } from "./right";
import { type Left } from "./left";
type Either = Right | Left;
/**
 * Type-level helper that preserves an Either input while forcing the result to stay typed as Left or Right.
 * 
 * **Supported call styles:**
 * - Classic: `expect(input)` → returns the same input
 * 
 * Returns the exact same runtime value, without mutation. Its main purpose is to keep a strict Either type in composed flows.
 * 
 * ```ts
 * const left = E.expect(E.fail());
 * // type: E.Fail
 * 
 * const right = E.expect(E.ok());
 * // type: E.Ok
 * 
 * const union = E.expect(
 * 	true
 * 		? E.right("success", 1)
 * 		: E.left("failure", "error"),
 * );
 * // type: E.Right<"success", 1> | E.Left<"failure", "error">
 * 
 * pipe(
 * 	E.ok(),
 * 	E.expect,
 * );
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/expect
 * 
 * @namespace E
 * 
 */
export declare function expect<GenericEither extends Either>(input: GenericEither): GenericEither;
export {};
