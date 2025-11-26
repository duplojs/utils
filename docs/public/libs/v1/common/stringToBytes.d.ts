declare const InvalidBytesInStringError_base: new (params: {
    "@DuplojsUtilsError/missing-builder-methods-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("./kind").Kind<import("./kind").KindDefinition<"invalid-bytes-in-string-error", unknown>, unknown> & import("./kind").Kind<import("./kind").KindDefinition<"@DuplojsUtilsError/missing-builder-methods-error", unknown>, unknown>;
export declare class InvalidBytesInStringError extends InvalidBytesInStringError_base {
    input: string;
    constructor(input: string);
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
