/**
 * Returns the parent folder path of a POSIX path.
 * 
 * **Supported call styles:**
 * - Classic: `getParentFolderPath(path)` -> returns the parent folder
 * 
 * It removes a trailing slash, drops the last segment, and falls back to `/` for absolute paths or `.` for relative paths when needed.
 * 
 * ```ts
 * const result = Path.getParentFolderPath("/foo/bar/baz");
 * // result: "/foo/bar"
 * const trailingResult = Path.getParentFolderPath("/foo/bar/");
 * // trailingResult: "/foo"
 * const relativeResult = Path.getParentFolderPath("foo");
 * // relativeResult: "."
 * const absoluteResult = Path.getParentFolderPath("/foo");
 * // absoluteResult: "/"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/path/getParentFolderPath
 * 
 */
export declare function getParentFolderPath<GenericPath extends string>(path: GenericPath): string;
