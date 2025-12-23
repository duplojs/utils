declare const InvalidMillisecondInStringError_base: new (params: {
    "@DuplojsUtilsError/missing-builder-methods-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & import("./kind").Kind<import("./kind").KindDefinition<"@DuplojsUtilsError/missing-builder-methods-error", unknown>, unknown> & import("./kind").Kind<import("./kind").KindDefinition<"invalid-millisecond-in-string-error", unknown>, unknown>;
export declare class InvalidMillisecondInStringError extends InvalidMillisecondInStringError_base {
    input: string;
    constructor(input: string);
}
declare const unitMapper: {
    ms: number;
    s: number;
    m: number;
    h: number;
    d: number;
    w: number;
};
export type MillisecondInString = `${number}${keyof typeof unitMapper}` | `${number}.${number}${keyof typeof unitMapper}`;
export declare function stringToMillisecond(millisecondInString: MillisecondInString | number, ...millisecondInStrings: (MillisecondInString | number)[]): number;
export {};
