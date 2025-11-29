interface AsyncGeneratorMapParams {
    index: number;
}
export declare function asyncMap<const GenericInput extends unknown, const GenericOutput extends unknown>(theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => Promise<GenericOutput>): (iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>) => AsyncGenerator<GenericOutput, unknown, unknown>;
export declare function asyncMap<const GenericInput extends unknown, const GenericOutput extends unknown>(iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>, theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => Promise<GenericOutput>): AsyncGenerator<GenericOutput, unknown, unknown>;
export {};
