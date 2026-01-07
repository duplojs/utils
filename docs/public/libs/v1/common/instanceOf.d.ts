import { type AnyConstructor } from "./types";
/**
 * The instanceOf() function creates a type guard based on one or several constructors. It checks instanceof while keeping precise typing.
 * 
 * **Supported call styles:**
 * - Classic: `instanceOf(input, constructor)` → returns a value
 * - Curried: `instanceOf(constructor)` → returns a function waiting for the input
 * - Classic predicate: `instanceOf(input, constructor)` → narrows the input type
 * - Curried predicate: `instanceOf(constructor)` → narrows the input type
 * 
 * Predicate overloads (type guards) narrow the output type.
 * 
 * ```ts
 * const input = new Date();
 * 
 * if (instanceOf(input, Date)) {
 * 	// type: Date
 * }
 * 
 * const result = pipe(
 * 	input,
 * 	when(
 * 		instanceOf(Date),
 * 		(value) => value.toISOString(),
 * 	),
 * );
 * // result: "..."
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/instanceOf
 * 
 * @namespace C
 * 
 */
export declare function instanceOf<GenericInput extends unknown, GenericConstructor extends AnyConstructor>(constructor: GenericConstructor | GenericConstructor[]): (input: GenericInput) => input is Extract<GenericInput, InstanceType<GenericConstructor>>;
export declare function instanceOf<GenericInput extends unknown, GenericConstructor extends AnyConstructor>(input: GenericInput, constructor: GenericConstructor | GenericConstructor[]): input is Extract<GenericInput, InstanceType<GenericConstructor>>;
