/**
 * Checks whether a path is absolute (POSIX).
 * 
 * **Supported call styles:**
 * - Classic: `isAbsolute(path)` -> returns a boolean
 * 
 * It returns true when the path starts with `/` and does not contain `..` segments.
 * 
 * ```ts
 * const absolutePath = Path.isAbsolute("/var/log");
 * // absolutePath: true
 * const parentTraversal = Path.isAbsolute("/var/../log");
 * // parentTraversal: false
 * const relativePath = Path.isAbsolute("var/log");
 * // relativePath: false
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/path/isAbsolute
 * 
 */
export declare function isAbsolute<GenericPath extends string>(path: GenericPath): boolean;
