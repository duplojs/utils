import { type AnyValue } from "../common";
export interface LoopOutputExistResult<GenericOutput extends unknown = unknown> {
    "-exitData": GenericOutput;
}
export interface LoopOutputNextResult<GenericOutput extends unknown = unknown> {
    "-nextData": GenericOutput;
}
export interface GeneratorLoopParams<GenericRawNextOutput extends any> {
    count: number;
    previousOutput: GenericRawNextOutput | undefined;
    next<GenericValue extends GenericRawNextOutput | undefined = undefined>(output?: GenericValue): LoopOutputNextResult<GenericValue>;
    exit<GenericOutput extends AnyValue = undefined>(output?: GenericOutput): LoopOutputExistResult<GenericOutput>;
}
export declare function loop<GenericRawExitOutput extends AnyValue = undefined, GenericRawNextOutput extends AnyValue = undefined>(loop: (params: GeneratorLoopParams<GenericRawNextOutput>) => LoopOutputNextResult<GenericRawNextOutput> | LoopOutputNextResult<undefined> | LoopOutputExistResult<GenericRawExitOutput> | LoopOutputExistResult<undefined>): Generator<Exclude<GenericRawExitOutput | GenericRawNextOutput, undefined>, unknown, unknown>;
