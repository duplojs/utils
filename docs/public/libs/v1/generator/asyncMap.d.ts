interface AsyncGeneratorMapParams {
    index: number;
}
export declare function asyncMap<const GenericInput extends unknown, const GenericOutput extends unknown>(theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => GenericOutput): (iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>) => AsyncGenerator<Awaited<GenericOutput>, unknown, unknown>;
export declare function asyncMap<const GenericInput extends unknown, const GenericOutput extends unknown>(iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>, theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => GenericOutput): AsyncGenerator<Awaited<GenericOutput>, unknown, unknown>;
export {};
