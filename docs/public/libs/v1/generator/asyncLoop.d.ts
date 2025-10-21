import { type AnyValue } from "../common";
import { type GeneratorLoopParams } from "./loop";
interface LoopOutputExistResult<GenericOutput extends any> {
    "-exitData": GenericOutput | undefined;
}
interface LoopOutputNextResult<GenericOutput extends any> {
    "-nextData": GenericOutput | undefined;
}
export declare function asyncLoop<GenericRawExitOutput extends AnyValue = undefined, GenericRawNextOutput extends AnyValue = undefined>(loop: (params: GeneratorLoopParams<GenericRawNextOutput>) => Promise<LoopOutputNextResult<GenericRawNextOutput> | LoopOutputNextResult<undefined> | LoopOutputExistResult<GenericRawExitOutput> | LoopOutputExistResult<undefined>>): AsyncGenerator<Exclude<GenericRawExitOutput | GenericRawNextOutput, undefined>, unknown, unknown>;
export {};
