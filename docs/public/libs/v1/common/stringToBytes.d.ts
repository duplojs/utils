declare const kind = "kind-invalid-bytes-in-string-error";
export declare class InvalidBytesInStringError extends Error {
    input: string;
    constructor(input: string);
    [kind]: unknown;
    static instanceof(value: unknown): value is InvalidBytesInStringError;
}
declare const unitMapper: {
    b: number;
    kb: number;
    mb: number;
    gb: number;
    tb: number;
    pb: number;
};
export type BytesInString = `${number}${keyof typeof unitMapper}`;
export declare function stringToBytes(bytesInString: BytesInString | number): number;
export {};
