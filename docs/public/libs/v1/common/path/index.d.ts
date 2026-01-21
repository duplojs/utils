/**
 * Path utilities to normalize, join, and inspect filesystem paths across platforms.
 * They preserve input strings and return new values.
 * 
 * **How to import:**
 * - From the main common namespace
 * - Via direct import for tree-shaking
 * 
 * ```ts
 * import { Path } from "@duplojs/utils";
 * import * as Path from "@duplojs/utils/common/path";
 * ```
 * 
 * What you will find in this namespace:
 * - checks (`Path.isAbsolute`, `Path.isUnixPath`)
 * - normalization and composition (`Path.normalize`, `Path.join`, `Path.resolveFrom`)
 * - path parsing (`Path.getParentFolderPath`, `Path.getBaseName`, `Path.getExtensionName`)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/path
 * 
 */
export * from "./isAbsolute";
export * from "./isUnixPath";
export * from "./normalize";
export * from "./join";
export * from "./getParentFolderPath";
export * from "./getBaseName";
export * from "./getExtensionName";
export * from "./resolveFrom";
