import * as DEither from "../../either";
/**
 * Resolves a list of path segments from an origin and returns an Either.
 * 
 * **Supported call styles:**
 * - Classic: `resolveFrom(paths, origin)` -> returns an Either
 * - Curried: `resolveFrom(origin)(paths)` -> returns an Either
 * 
 * Segments are resolved in order using `resolveRelative`.
 * The result is an `Either` that is `success` only when the resolved path is absolute; otherwise it returns `fail`.
 * 
 * ```ts
 * const absoluteResult = Path.resolveFrom(["alpha", "beta"], "/root");
 * // absoluteResult: DEither.success<"/root/alpha/beta">
 * const result = unwrap(absoluteResult);
 * // result: "/root/alpha/beta"
 * 
 * const overrideResult = Path.resolveFrom(["alpha", "/root", "beta"], "gamma");
 * // overrideResult: DEither.success<"/root/beta">
 * const relativeResult = Path.resolveFrom(["..", ".."], "alpha");
 * // relativeResult: DEither.fail
 * 
 * const curriedResult = pipe(
 * 	["alpha", "beta"],
 * 	Path.resolveFrom("/root"),
 * );
 * // curriedResult: DEither.success("/root/alpha/beta")
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/path/resolveFrom
 * 
 */
export declare function resolveFrom<GenericPaths extends readonly string[]>(origin: string): (paths: GenericPaths) => DEither.EitherFail | DEither.EitherSuccess<string>;
export declare function resolveFrom<GenericPaths extends readonly string[]>(paths: GenericPaths, origin: string): DEither.EitherFail | DEither.EitherSuccess<string>;
