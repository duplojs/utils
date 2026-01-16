/**
 * The simpleClone() function quickly duplicates a value without advanced logic, useful for shallow copies or simple structures.
 * 
 * Signature: `simpleClone(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const original = [
 * 	1,
 * 	2,
 * 	3,
 * ];
 * const copy = simpleClone(original);
 * 
 * // type: number[]
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/simpleClone
 * 
 */
export declare function simpleClone<GenericObject extends unknown = unknown>(unknownValue: GenericObject): GenericObject;
