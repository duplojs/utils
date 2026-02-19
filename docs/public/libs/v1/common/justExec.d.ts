/**
 * The justExec() function executes a callback immediately and returns the callback result.
 * 
 * **Supported call styles:**
 * - Classic: `justExec(theFunction)` -> executes `theFunction` and returns its output
 * - Curried: not available for this function
 * 
 * The callback is called once per invocation. The function itself does not transform the callback output.
 * 
 * ```ts
 * const numberResult = justExec(
 * 	() => 42 as const,
 * );
 * // type: 42
 * 
 * const objectResult = justExec(
 * 	() => ({
 * 		id: 1,
 * 		name: "ZeRiix",
 * 	}),
 * );
 * // type: { id: number; name: string; }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/justExec
 * 
 */
export declare function justExec<GenericOutput extends unknown>(theFunction: () => GenericOutput): GenericOutput;
