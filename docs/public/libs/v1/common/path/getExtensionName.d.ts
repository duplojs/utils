/**
 * Returns the last extension of a path, without the leading dot.
 * 
 * **Supported call styles:**
 * - Classic: `getExtensionName(path)` -> returns the extension or null
 * 
 * It returns null when no extension is found, when the path ends with a dot, or when the path is `..`.
 * 
 * ```ts
 * const txtResult = Path.getExtensionName("/foo/bar.txt");
 * // txtResult: "txt"
 * const tarResult = Path.getExtensionName("archive.tar.gz");
 * // tarResult: "gz"
 * const dotResult = Path.getExtensionName("file.");
 * // dotResult: null
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/path/getExtensionName
 * 
 */
export declare function getExtensionName<GenericPath extends string>(path: GenericPath): string | null;
