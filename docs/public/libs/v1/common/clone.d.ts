import { type SimplifyTypeForce } from "./types/simplifyTypeForce";
/**
 * The clone() function performs a typed deep copy of a value while preserving its structure and types.
 * 
 * Signature: `clone(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/clone
 * 
 */
export declare function clone<T extends unknown = unknown>(unknownValue: T): SimplifyTypeForce<T>;
