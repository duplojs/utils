import { type Kind, type KindHandler } from "./kind";
import { type AnyTuple } from "./types";
/**
 * The hasSomeKinds() function checks that a value carries at least one of the requested kinds and acts as a type guard toward their union.
 * 
 * **Supported call styles:**
 * - Classic: `hasSomeKinds(input, kinds)` → returns a value
 * - Curried: `hasSomeKinds(kinds)` → returns a function waiting for the input
 * - Classic predicate: `hasSomeKinds(input, kinds)` → narrows the input type
 * - Curried predicate: `hasSomeKinds(kinds)` → narrows the input type
 * 
 * Predicate overloads (type guards) narrow the output type.
 * 
 * ```ts
 * const input = E.ok() as E.EitherOk | E.EitherError;
 * 
 * if (hasSomeKinds(input, [
 * 	E.eitherOkKind,
 * 	E.eitherErrorKind,
 * ])) {
 * 	// type: E.EitherOk | E.EitherError
 * }
 * 
 * const result = pipe(
 * 	input,
 * 	when(
 * 		hasSomeKinds([
 * 			E.eitherOkKind,
 * 			E.eitherErrorKind,
 * 		]),
 * 		() => "known",
 * 	),
 * );
 * // result: "known" | E.EitherError<unknown>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/hasSomeKinds
 * 
 * @namespace C
 * 
 */
export declare function hasSomeKinds<GenericInput extends unknown, const GenericKindHandlers extends AnyTuple<KindHandler>, GenericKindHandler extends GenericKindHandlers[number]>(kinds: GenericKindHandlers): (input: GenericInput) => input is Extract<GenericInput, GenericKindHandler extends any ? Kind<GenericKindHandler["definition"]> : never>;
export declare function hasSomeKinds<GenericInput extends unknown, const GenericKindHandlers extends AnyTuple<KindHandler>, GenericKindHandler extends GenericKindHandlers[number]>(input: GenericInput, kinds: GenericKindHandlers): input is Extract<GenericInput, GenericKindHandler extends any ? Kind<GenericKindHandler["definition"]> : never>;
