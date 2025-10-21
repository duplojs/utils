declare const kind = "kind-invalid-millisecond-in-string-error";
export declare class InvalidMillisecondInStringError extends Error {
    input: string;
    constructor(input: string);
    [kind]: unknown;
    static instanceof(value: unknown): value is InvalidMillisecondInStringError;
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
