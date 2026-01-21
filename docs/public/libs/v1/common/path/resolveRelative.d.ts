import { type AnyTuple } from "../types";
/**
 * Resolves path segments into a single POSIX-like path.
 * 
 * **Supported call styles:**
 * - Classic: `resolveRelative(...segments)` -> returns the resolved path
 * 
 * Empty segments are ignored, trailing slashes and leading `./` are removed, and absolute segments reset the base.
 * `..` segments remove previous segments and may remain leading when resolving above root.
 * 
 * ```ts
 * const basicResult = Path.resolveRelative("alpha", "beta");
 * // basicResult: "/alpha/beta"
 * const overrideResult = Path.resolveRelative("alpha", "/root", "beta");
 * // overrideResult: "/root/beta"
 * const parentResult = Path.resolveRelative("alpha", "..", "..", "beta");
 * // parentResult: "../beta"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/path/resolveRelative
 * 
 */
export declare function resolveRelative<GenericSegment extends string>(...segments: AnyTuple<GenericSegment>): string;
