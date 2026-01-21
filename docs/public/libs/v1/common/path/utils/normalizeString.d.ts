export interface normalizeStringParams {
    allowAboveRoot?: boolean;
}
export declare function normalizeString<GenericPath extends string>(path: GenericPath, params: normalizeStringParams): string;
