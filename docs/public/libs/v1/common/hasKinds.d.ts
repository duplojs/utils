import { type Kind, type KindHandler } from "./kind";
import { type AnyTuple, type UnionToIntersection } from "./types";
/**
 * The hasKinds() function checks that a value carries all requested kinds and acts as a type guard toward their intersection.
 * 
 * **Supported call styles:**
 * - Classic: `hasKinds(input, kinds)` → returns a value
 * - Curried: `hasKinds(kinds)` → returns a function waiting for the input
 * - Classic predicate: `hasKinds(input, kinds)` → narrows the input type
 * - Curried predicate: `hasKinds(kinds)` → narrows the input type
 * 
 * Predicate overloads (type guards) narrow the output type.
 * 
 * ```ts
 * const input = E.ok() as E.Ok | E.Error;
 * 
 * if (hasKinds(input, [
 * 	E.eitherOkKind,
 * 	E.eitherRightKind,
 * ])) {
 * 	// type: E.Ok
 * }
 * 
 * const result = pipe(
 * 	input,
 * 	when(
 * 		hasKinds([
 * 			E.eitherOkKind,
 * 			E.eitherRightKind,
 * 		]),
 * 		() => "ok",
 * 	),
 * );
 * // result: "ok" | E.Error<unknown>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/hasKinds
 * 
 */
export declare function hasKinds<GenericInput extends unknown, const GenericKindHandlers extends AnyTuple<KindHandler>, GenericKindHandler extends GenericKindHandlers[number]>(kinds: GenericKindHandlers): (input: GenericInput) => input is Extract<GenericInput, UnionToIntersection<GenericKindHandler extends any ? Kind<GenericKindHandler["definition"]> : never>>;
export declare function hasKinds<GenericInput extends unknown, const GenericKindHandlers extends AnyTuple<KindHandler>, GenericKindHandler extends GenericKindHandlers[number]>(input: GenericInput, kinds: GenericKindHandlers): input is Extract<GenericInput, UnionToIntersection<GenericKindHandler extends any ? Kind<GenericKindHandler["definition"]> : never>>;
