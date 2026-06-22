import { type GetKindValue, type Kind } from "../common";
import { type ForbiddenKey, type GetPropsWithValue } from "../object";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";
declare const ForwardAssertsSelectionError_base: import("../common").KindClass<import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsError/forward-asserts-selection-error", unknown>>, ErrorConstructor>;
export declare class ForwardAssertsSelectionError extends ForwardAssertsSelectionError_base {
    value: unknown;
    selector: Record<string, boolean>;
    constructor(value: unknown, selector: Record<string, boolean>);
}
type Either = Right | Left;
type ForbiddenMoreKey<GenericInput extends unknown, GenericSelector extends Record<string, boolean>> = ForbiddenKey<GenericSelector, Extract<Exclude<keyof GenericSelector, GetKindValue<typeof informationKind, Extract<GenericInput, Either>>>, string>>;
type SelectedInput<GenericInput extends unknown, GenericSelector extends Record<string, boolean>> = (Extract<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>>> | Exclude<GenericInput, Either>);
/**
 * Forwards selected `Either` values unchanged according to an exhaustive information selector, and throws for unselected `Either` values.
 * 
 * **Supported call styles:**
 * - Classic: `forwardAssertsSelection(input, selector)` where `selector` maps every possible `Either` information to `true` or `false`
 * - Curried: `forwardAssertsSelection(selector)` returns a function waiting for the input, mainly for `pipe`
 * 
 * The selector must exhaustively describe every `Either` information in the input type. An `Either` whose information maps to `true` is returned unchanged, one whose information maps to `false` throws, and any non-`Either` input passes through unchanged.
 * 
 * ```ts
 * const operation = true
 * 	? E.right("operation.success", 42)
 * 	: E.left("operation.failure", "error");
 * 
 * const selectedOperation = E.forwardAssertsSelection(operation, {
 * 	"operation.success": true,
 * 	"operation.failure": false,
 * });
 * 
 * type selectedOperationCheck = ExpectType<
 * 	typeof selectedOperation,
 * 	E.Right<"operation.success", 42>,
 * 	"strict"
 * >;
 * 
 * const rawValue = E.forwardAssertsSelection("unchanged", {});
 * 
 * type rawValueCheck = ExpectType<
 * 	typeof rawValue,
 * 	"unchanged",
 * 	"strict"
 * >;
 * 
 * const pipedOperation = pipe(
 * 	operation,
 * 	E.forwardAssertsSelection({
 * 		"operation.success": true,
 * 		"operation.failure": true,
 * 	}),
 * );
 * 
 * type pipedOperationCheck = ExpectType<
 * 	typeof pipedOperation,
 * 	| E.Right<"operation.success", 42>
 * 	| E.Left<"operation.failure", "error">,
 * 	"strict"
 * >;
 * ```
 * 
 * @remarks
 * - A selector value typed as `boolean` keeps the matching `Either` in the return type because a runtime `true` forwards it and a runtime `false` throws.
 * - Throws `E.ForwardAssertsSelectionError` when an `Either` information is not selected.
 * 
 * @see [`E.unwrapSelectionOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelectionOrThrow)
 * @see [`E.forwardAsserts`](https://utils.duplojs.dev/en/v1/api/common/forwardAsserts)
 * @see https://utils.duplojs.dev/en/v1/api/either/forwardAssertsSelection
 * 
 * @namespace E
 * 
 */
export declare function forwardAssertsSelection<GenericInput extends unknown, GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>>(selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>): (input: GenericInput) => Extract<SelectedInput<GenericInput, GenericSelector>, any>;
export declare function forwardAssertsSelection<GenericInput extends unknown, const GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>>(input: GenericInput, selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>): Extract<SelectedInput<GenericInput, GenericSelector>, any>;
export {};
