import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { type EitherFutureSuccess } from "./success";
import { type EitherFutureError } from "./error";
import { type IsEqual } from "../../common/types/isEqual";
import { type MaybePromise } from "../../common/types/maybePromise";
import { type AnyValue } from "../../common";
type Either = EitherRight | EitherLeft;
type ComputeEitherFutureSuccessResult<GenericValue extends unknown> = IsEqual<never, Exclude<GenericValue, Either>> extends false ? EitherFutureSuccess<Exclude<GenericValue, Either>> : never;
type ComputeEitherFutureErrorResult<GenericValue extends unknown> = GenericValue extends Promise<unknown> ? EitherFutureError : never;
type ComputeFutureEitherResult<GenericValue extends unknown = unknown> = Extract<Awaited<GenericValue>, Either> | ComputeEitherFutureSuccessResult<Awaited<GenericValue>> | ComputeEitherFutureErrorResult<GenericValue>;
export type FutureEitherAllResult<GenericArray extends readonly unknown[] | []> = Future<{
    -readonly [Prop in keyof GenericArray]: Awaited<Future<GenericArray[Prop]>>;
}>;
declare const kind = "kind-future-either";
export declare class Future<const GenericValue extends unknown = unknown> extends Promise<ComputeFutureEitherResult<GenericValue>> {
    constructor(value: GenericValue);
    [kind]: unknown;
    then<const GenericOutput extends AnyValue>(theFunction: (result: Extract<ComputeFutureEitherResult<GenericValue>, any>) => MaybePromise<GenericOutput>): Future<GenericOutput>;
    static get [Symbol.species](): PromiseConstructor;
    static instanceof<GenericValue extends unknown>(value: GenericValue): value is Extract<GenericValue, Future<any>>;
    static all<const GenericValue extends unknown, GenericArray extends readonly GenericValue[] | []>(values: GenericArray): FutureEitherAllResult<GenericArray>;
}
export declare function future<GenericEither extends AnyValue>(value: GenericEither): Future<GenericEither>;
export {};
