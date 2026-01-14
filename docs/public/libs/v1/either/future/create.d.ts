import { type EitherLeft } from "../left";
import { type EitherRight } from "../right";
import { type EitherFutureSuccess } from "./success";
import { type EitherFutureError } from "./error";
import { type IsEqual } from "../../common/types/isEqual";
import { type AnyValue } from "../../common";
type Either = EitherRight | EitherLeft;
type ComputeEitherFutureSuccessResult<GenericValue extends unknown> = IsEqual<never, Exclude<GenericValue, Either>> extends false ? EitherFutureSuccess<Exclude<GenericValue, Either>> : never;
type ComputeEitherFutureErrorResult<GenericValue extends unknown> = GenericValue extends Future<any> ? GenericValue : GenericValue extends Promise<unknown> ? EitherFutureError : never;
type ComputeFutureEitherResult<GenericValue extends unknown = unknown> = Extract<(Extract<Awaited<GenericValue>, Either> | ComputeEitherFutureSuccessResult<Awaited<GenericValue>> | ComputeEitherFutureErrorResult<GenericValue>), any>;
export type FutureEitherAllResult<GenericArray extends readonly unknown[] | []> = Future<{
    -readonly [Prop in keyof GenericArray]: Awaited<Future<GenericArray[Prop]>>;
}>;
declare const kind = "kind-future-either";
export declare class Future<const GenericValue extends unknown = unknown> extends Promise<Extract<ComputeFutureEitherResult<GenericValue>, any>> {
    constructor(value: GenericValue);
    [kind]: unknown;
    then<TResult1 = Extract<ComputeFutureEitherResult<GenericValue>, any>, TResult2 = never>(onfulfilled?: ((value: Extract<ComputeFutureEitherResult<GenericValue>, any>) => TResult1 | PromiseLike<TResult1>) | null): Promise<TResult1 | TResult2>;
    static get [Symbol.species](): PromiseConstructor;
    static instanceof<GenericValue extends unknown>(value: GenericValue): value is Extract<GenericValue, Future<any>>;
    static rightAll<const GenericArray extends readonly unknown[]>(values: GenericArray): FutureEitherAllResult<GenericArray>;
}
/**
 * Future<T> class: an enhanced promise capable of carrying Either values and exposing helpers like Future.all.
 * 
 * Signature: `future(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const maybePromise = E.future(
 * 	Promise.resolve(1),
 * );
 * 
 * await maybePromise.then((value) => {
 * 	// type: E.EitherFutureSuccess<number> | E.EitherFutureError
 * 	return value;
 * });
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/future
 * 
 * @namespace E
 * 
 */
export declare function future<GenericEither extends AnyValue>(value: GenericEither): Future<GenericEither>;
export {};
