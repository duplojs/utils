import * as DEither from "../either";
import type { AnyTuple } from "./types";
export declare namespace Path {
    const baseNameRegex: RegExp;
    const folderNameRegex: RegExp;
    const extensionNameRegex: RegExp;
    const isRelativeRegex: RegExp;
    const segmentTrailingRegex: RegExp;
    const segmentRelativeRegex: RegExp;
    interface GetBaseNameParams {
        removeExtension?: boolean;
    }
    /**
     * Returns the last segment of a path (after the final slash), with optional extension removal.
     * 
     * **Supported call styles:**
     * - Classic: `getBaseName(path, params?)` -> returns the base name or null
     * 
     * The path must contain at least one `/` to match. It returns null when no segment is found.
     * When `removeExtension` is true, the file extension is removed from the base name.
     * 
     * ```ts
     * const defaultResult = Path.getBaseName("/foo/bar.txt");
     * // defaultResult: "bar.txt"
     * const withoutExtResult = Path.getBaseName("/foo/bar.txt", { removeExtension: true });
     * // withoutExtResult: "bar"
     * const nullResult = Path.getBaseName("bar.txt");
     * // nullResult: null
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/common/path/getBaseName
     * 
     */
    function getBaseName<GenericPath extends string>(path: GenericPath, params?: GetBaseNameParams): string | null;
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
    function getExtensionName<GenericPath extends string>(path: GenericPath): string | null;
    /**
     * Returns the parent folder path of a POSIX path.
     * 
     * **Supported call styles:**
     * - Classic: `getParentFolderPath(path)` -> returns the parent folder or null
     * 
     * The path must contain at least one `/` to match. It removes a trailing slash and drops the last segment.
     * 
     * ```ts
     * const result = Path.getParentFolderPath("/foo/bar/baz");
     * // result: "/foo/bar"
     * const trailingResult = Path.getParentFolderPath("/foo/bar/");
     * // trailingResult: "/foo"
     * const relativeResult = Path.getParentFolderPath("foo");
     * // relativeResult: null
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/common/path/getParentFolderPath
     * 
     */
    function getParentFolderPath<GenericPath extends string>(path: GenericPath): string | null;
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
    function isAbsolute<GenericPath extends string>(path: GenericPath): boolean;
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
    function resolveFrom<GenericSegment extends string>(origin: string, segments: AnyTuple<GenericSegment>): DEither.Fail | DEither.Success<string>;
    /**
     * Resolves path segments into a single POSIX-like path.
     * 
     * **Supported call styles:**
     * - Classic: `resolveRelative(segments)` -> returns the resolved path
     * 
     * Empty segments are ignored, trailing slashes and leading `./` are removed, and absolute segments reset the base.
     * `..` segments remove previous segments and may remain leading when resolving above root.
     * 
     * ```ts
     * const basicResult = Path.resolveRelative(["alpha", "beta"]);
     * // basicResult: "/alpha/beta"
     * const overrideResult = Path.resolveRelative(["alpha", "/root", "beta"]);
     * // overrideResult: "/root/beta"
     * const parentResult = Path.resolveRelative(["alpha", "..", "..", "beta"]);
     * // parentResult: "../beta"
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/common/path/resolveRelative
     * 
     */
    function resolveRelative<GenericSegment extends string>(segments: AnyTuple<GenericSegment>): string;
    /**
     * Cleans a POSIX path by removing a trailing slash and a leading `./` prefix.
     * 
     * **Supported call styles:**
     * - Classic: `fix(path)` -> returns a cleaned path
     * 
     * The function does not resolve `..` segments and only removes a single trailing slash and a single leading `./`.
     * 
     * ```ts
     * const trimmedTrailing = Path.fix("alpha/beta/");
     * // trimmedTrailing: "alpha/beta"
     * const trimmedRelative = Path.fix("./alpha/beta");
     * // trimmedRelative: "alpha/beta"
     * const cleanedBoth = Path.fix("./alpha/");
     * // cleanedBoth: "alpha"
     * ```
     * 
     * @see https://utils.duplojs.dev/en/v1/api/common/path/fix
     * 
     */
    function fix(path: string): string;
}
