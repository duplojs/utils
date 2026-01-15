type Primitive = (string | boolean | null | number | undefined | bigint);
/**
 * Converts a primitive value to its string representation.
 * 
 * **Supported call styles:**
 * - Classic: `to(value)` -> returns a string
 * 
 * It uses template literal conversion and preserves literal types when possible.
 * 
 * ```ts
 * const fromNumber = S.to(42);
 * const fromBoolean = S.to(false);
 * const fromNull = S.to(null);
 * const fromBigInt = S.to(10n);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/to
 * 
 * @namespace S
 * 
 */
export declare function to<GenericValue extends Primitive>(value: GenericValue): `${GenericValue}`;
export {};
