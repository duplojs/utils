interface GetBaseNameParams {
    extension?: string;
}
/**
 * Returns the last non-empty segment of a path, optionally without an extension.
 * 
 * **Supported call styles:**
 * - Classic: `getBaseName(path, params?)` -> returns the base name or null
 * 
 * It ignores trailing slashes and returns null when the path has no segment or when the last segment is `..`.
 * When an extension is provided, it is removed only if it matches the end of the base name.
 * 
 * ```ts
 * const defaultResult = Path.getBaseName("/foo/bar.txt");
 * // defaultResult: "bar.txt"
 * const withoutExtResult = Path.getBaseName("/foo/bar.txt", { extension: ".txt" });
 * // withoutExtResult: "bar"
 * const nullResult = Path.getBaseName("..");
 * // nullResult: null
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/path/getBaseName
 * 
 */
export declare function getBaseName<GenericPath extends string>(path: GenericPath, params?: GetBaseNameParams): string | null;
export {};
