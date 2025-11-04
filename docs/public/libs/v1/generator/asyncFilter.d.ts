interface AsyncGeneratorFilterParams {
    index: number;
}
export declare function asyncFilter<GenericElement extends unknown, GenericOutput extends GenericElement>(predicate: (item: GenericElement, params: AsyncGeneratorFilterParams) => item is GenericOutput): (iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>) => AsyncGenerator<GenericOutput, unknown, unknown>;
export declare function asyncFilter<GenericElement extends unknown, GenericOutput extends GenericElement>(iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>, predicate: (item: GenericElement, params: AsyncGeneratorFilterParams) => item is GenericOutput): AsyncGenerator<GenericOutput, unknown, unknown>;
export declare function asyncFilter<GenericElement extends unknown>(predicate: (item: GenericElement, params: AsyncGeneratorFilterParams) => boolean): (iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>) => AsyncGenerator<GenericElement, unknown, unknown>;
export declare function asyncFilter<GenericElement extends unknown>(iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>, predicate: (item: GenericElement, params: AsyncGeneratorFilterParams) => boolean): AsyncGenerator<GenericElement, unknown, unknown>;
export {};
