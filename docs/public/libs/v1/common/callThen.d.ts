/**
 * The callThen() function applies a callback to a value immediately, or waits for a promise input before running the same callback.
 * 
 * Supported call styles:
 * - Classic: `callThen(input, callback)` → returns a value or a promise depending on the input and callback
 * 
 * Behavior:
 * - direct values call the callback synchronously
 * - `Promise` inputs call the callback through `.then(...)`
 * - callback promises are preserved for direct values and flattened for `Promise` inputs
 * 
 * ```ts
 * const syncResult = callThen(
 * 	2,
 * 	(value) => value * 3,
 * );
 * // type: number
 * 
 * const asyncFromSync = callThen(
 * 	"duplo",
 * 	async(value) => Promise.resolve(value.toUpperCase()),
 * );
 * // type: Promise<string>
 * 
 * const asyncFromPromise = callThen(
 * 	Promise.resolve({
 * 		count: 2,
 * 	}),
 * 	({ count }) => count + 1,
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/callThen
 * 
 */
export declare function callThen<GenericInput extends unknown, GenericOutput extends unknown>(input: GenericInput, TheFunction: (input: Awaited<GenericInput>) => GenericOutput): GenericInput extends Promise<unknown> ? Promise<Awaited<GenericOutput>> : GenericOutput;
