import { type AnyValue } from "./types/anyValue";
interface LoopOutputExistResult<GenericOutput extends any> {
    "-exitData": GenericOutput;
}
interface LoopOutputNextResult<GenericOutput extends any> {
    "-nextData": GenericOutput;
}
export interface LoopParams<GenericRawNextOutput extends any> {
    count: number;
    previousOutput: GenericRawNextOutput | undefined;
    next<GenericValue extends GenericRawNextOutput | undefined = undefined>(output?: GenericValue): LoopOutputNextResult<GenericValue>;
    exit<GenericOutput extends AnyValue = undefined>(output?: GenericOutput): LoopOutputExistResult<GenericOutput>;
}
export declare function loop<GenericRawExitOutput extends AnyValue = undefined, GenericRawNextOutput extends AnyValue = undefined>(loop: (params: LoopParams<GenericRawNextOutput>) => LoopOutputNextResult<GenericRawNextOutput> | LoopOutputExistResult<GenericRawExitOutput>): GenericRawExitOutput;
export {};
