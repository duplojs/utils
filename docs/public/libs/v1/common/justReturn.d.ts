import { type AnyValue } from "./types";
/**
 * The justReturn() function builds a constant function: it ignores its argument and always returns the same value. It also exists in direct form to immediately return that value.
 * 
 * Signature: `justReturn(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * type Input =
 * 	| {
 * 		kind: "ok";
 * 		value: number;
 * 	} | {
 * 		kind: "healt";
 * 		info: string;
 * 	} | {
 * 		kind: "error";
 * 		message: string;
 * 	};
 * 
 * const input = {
 * 	kind: "ok",
 * 	value: 4,
 * } as Input;
 * 
 * const result = pipe(
 * 	input,
 * 	P.match(
 * 		{ kind: "ok" },
 * 		O.getProperty("value"),
 * 	),
 * 	// whatever else happens, we return "error"
 * 	P.otherwise(justReturn("error")),
 * );
 * 
 * // type: number | "error"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/justReturn
 * 
 * @namespace C
 * 
 */
export declare function justReturn<GenericInput extends unknown, GenericValue extends AnyValue>(value: GenericValue): (input: GenericInput) => GenericValue;
export declare function justReturn<GenericInput extends unknown, GenericValue extends AnyValue>(input: GenericInput, value: GenericValue): GenericValue;
