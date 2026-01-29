/**
 * Provides a map that resolves file extensions to their MIME types.
 * 
 * **Supported call styles:**
 * - Access: `mimeType.get(extension)` -> returns the MIME type or undefined
 * 
 * Extensions are stored without the leading dot and should be passed in lower case.
 * When an extension is not present, the map returns `undefined`.
 * 
 * ```ts
 * const jsonType = mimeType.get("json");
 * // jsonType: "application/json"
 * const svgType = mimeType.get("svg");
 * // svgType: "image/svg+xml"
 * const unknownType = mimeType.get("unknown");
 * // unknownType: undefined
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/mimeType
 * 
 */
export declare const mimeType: Map<string, string>;
