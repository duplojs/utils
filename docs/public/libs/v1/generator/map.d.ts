interface GeneratorMapParams {
    index: number;
}
export declare function map<const GenericInput extends unknown, const GenericOutput extends unknown>(theFunction: (arg: GenericInput, params: GeneratorMapParams) => GenericOutput): (iterator: Iterable<GenericInput>) => Generator<GenericOutput, unknown, unknown>;
export declare function map<const GenericInput extends unknown, const GenericOutput extends unknown>(iterator: Iterable<GenericInput>, theFunction: (arg: GenericInput, params: GeneratorMapParams) => GenericOutput): Generator<GenericOutput, unknown, unknown>;
export {};
