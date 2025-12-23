import { type LoopParams } from "./loop";
import { type AnyValue } from "./types/anyValue";
interface LoopOutputExistResult<GenericOutput extends any> {
    "-exitData": GenericOutput;
}
interface LoopOutputNextResult<GenericOutput extends any> {
    "-nextData": GenericOutput;
}
export declare function asyncLoop<GenericRawExitOutput extends AnyValue = undefined, GenericRawNextOutput extends AnyValue = undefined>(loop: (params: LoopParams<GenericRawNextOutput>) => Promise<LoopOutputNextResult<GenericRawNextOutput | undefined> | LoopOutputExistResult<GenericRawExitOutput>>): Promise<GenericRawExitOutput>;
export {};
