interface GeneratorFilterParams {
    index: number;
}
export declare function filter<GenericElement extends unknown, GenericOutput extends GenericElement>(predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput): (iterator: Iterable<GenericElement>) => Generator<GenericOutput, unknown, unknown>;
export declare function filter<GenericElement extends unknown, GenericOutput extends GenericElement>(iterator: Iterable<GenericElement>, predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput): Generator<GenericOutput, unknown, unknown>;
export declare function filter<GenericElement extends unknown>(predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean): (iterator: Iterable<GenericElement>) => Generator<GenericElement, unknown, unknown>;
export declare function filter<GenericElement extends unknown>(iterator: Iterable<GenericElement>, predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean): Generator<GenericElement, unknown, unknown>;
export {};
