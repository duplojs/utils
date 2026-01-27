import * as DEither from "../../either";
import type { AnyTuple } from "../types";
/**
 * Resolves a list of path segments from an origin and returns an Either.
 * 
 * **Supported call styles:**
 * - Classic: `resolveFrom(origin, segments)` -> returns an Either
 * 
 * Segments are resolved in order using `resolveRelative`.
 * The result is an `Either` that is `success` only when the resolved path is absolute; otherwise it returns `fail`.
 * 
 * ```ts
 * const absoluteResult = Path.resolveFrom("/root", ["alpha", "beta"]);
 * // absoluteResult: DEither.success<"/root/alpha/beta">
 * const result = unwrap(absoluteResult);
 * // result: "/root/alpha/beta"
 * 
 * const overrideResult = Path.resolveFrom("gamma", ["alpha", "/root", "beta"]);
 * // overrideResult: DEither.success<"/root/beta">
 * const relativeResult = Path.resolveFrom("alpha", ["..", ".."]);
 * // relativeResult: DEither.fail
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/path/resolveFrom
 * 
 */
export declare function resolveFrom<GenericSegment extends string>(origin: string, segments: AnyTuple<GenericSegment>): DEither.Fail | DEither.Success<string>;
