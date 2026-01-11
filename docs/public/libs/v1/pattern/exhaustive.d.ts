import { type Unwrap } from "../common";
import { type PatternResult } from "./result";
/**
 * Unwraps a pattern result when all cases are handled.
 * 
 * Signature: `exhaustive(result)` → returns the unwrapped value
 * 
 * Use this to signal that all patterns have been handled.
 * 
 * ```ts
 * const input = <{
 * 	kind: "circle";
 * 	radius: number;
 * } | {
 * 	kind: "square";
 * 	size: number;
 * }>{
 * 	kind: "circle",
 * 	radius: 2,
 * };
 * 
 * P.match(input)
 * 	.with(
 * 		{ kind: "circle" },
 * 		(shape) => shape.radius * 2,
 * 	)
 * 	.with(
 * 		{ kind: "square" },
 * 		(shape) => shape.size * 2,
 * 
 * 	)
 * 	.exhaustive(); // 4
 * 
 * pipe(
 * 	input,
 * 	P.match(
 * 		{ kind: "circle" },
 * 		(shape) => shape.radius * 2,
 * 	),
 * 	P.match(
 * 		{ kind: "square" },
 * 		(shape) => shape.size * 2,
 * 	),
 * 	P.exhaustive,
 * ); // 4
 * ```
 * 
 * @see [`P.match`](https://utils.duplojs.dev/en/v1/api/pattern/match) For building match chains
 * @see https://utils.duplojs.dev/en/v1/api/pattern/exhaustive
 * 
 * @namespace P
 * 
 */
export declare function exhaustive<const GenericValue extends unknown, GenericResult extends PatternResult<GenericValue>>(result: GenericResult): Unwrap<GenericResult>;
