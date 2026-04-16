/**
 * The memoObject() function lazily evaluates a getter, memoizes the returned object, and exposes it through a proxy.
 * 
 * Call style: direct call (`memoObject(getter)`).
 * 
 * Reads and writes go through the same memoized object.
 * 
 * ```ts
 * let calls = 0;
 * const state = memoObject(() => {
 * 	calls += 1;
 * 	return {
 * 		count: 1,
 * 	};
 * });
 * 
 * const first = state.count;
 * const second = state.count;
 * // calls = 1
 * 
 * state.count = 2;
 * const updated = state.count;
 * // updated = 2
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/memoObject
 * 
 */
export declare function memoObject<GenericOutput extends object>(getter: () => GenericOutput): GenericOutput;
