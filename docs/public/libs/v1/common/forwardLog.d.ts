/**
 * The forwardLog() function logs the received value (side effect) then returns it unchanged, handy for inspecting a pipeline without breaking it.
 * 
 * Signature: `forwardLog(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = {
 * 	id: 42,
 * 	name: "Neo",
 * };
 * 
 * const result = pipe(
 * 	input,
 * 	forwardLog,
 * 	({ name }) => `Hello ${name}!`,
 * );
 * 
 * // logs: { id: 42, name: "Neo" }
 * // result: "Hello Neo!"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/forwardLog
 * 
 */
export declare function forwardLog<const GenericInput extends unknown>(input: GenericInput): GenericInput;
