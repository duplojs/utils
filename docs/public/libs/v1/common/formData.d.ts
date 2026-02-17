type EligibleFormDataValue = (string | File | undefined | {
    [key: string]: EligibleFormDataValue;
} | EligibleFormDataValue[]);
export declare class TheFormData<GenericValues extends Record<string, EligibleFormDataValue>> extends FormData {
    readonly inputValues: GenericValues;
    private constructor();
    static toFlatEntries(value: EligibleFormDataValue, path?: string): Iterable<[string, string | File]>;
    static fromEntries(iterable: Iterable<[string, unknown]>, arrayMaxIndex: number): object;
}
export declare function createFormData<GenericValues extends Record<string, EligibleFormDataValue>>(inputValues: GenericValues): TheFormData<GenericValues>;
export {};
