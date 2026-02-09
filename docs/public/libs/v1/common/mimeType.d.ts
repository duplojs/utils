export interface MimeTypeStore {
    get(extensionName: string): string | undefined;
    set(extensionName: string, mimeType: string): void;
}
/**
 * Provides an object that resolves file extensions to their MIME types and allows custom registrations.
 * 
 * **Supported call styles:**
 * - Access: `mimeType.get(extension)` -> returns the MIME type or undefined
 * - Registration: `mimeType.set(extension, mimeType)` -> stores or overrides a MIME type for an extension
 * 
 * Extensions are stored without the leading dot and should be passed in lower case.
 * When an extension is not present, `mimeType.get(...)` returns `undefined`.
 * 
 * ```ts
 * const jsonType = mimeType.get("json");
 * // jsonType: "application/json"
 * const svgType = mimeType.get("svg");
 * // svgType: "image/svg+xml"
 * const unknownType = mimeType.get("unknown");
 * // unknownType: undefined
 * 
 * mimeType.set("txtnull", "text-null/plain");
 * const customType = mimeType.get("txtnull");
 * // customType: "text-null/plain"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/mimeType
 * 
 */
export declare const mimeType: MimeTypeStore;
