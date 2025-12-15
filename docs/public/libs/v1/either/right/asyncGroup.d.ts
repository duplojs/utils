import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, type Unwrap, type MaybePromise } from "../../common";
import { type EitherLeft } from "../left";
import { type EitherRight } from "./create";
import * as DEither from "..";
type Either = MaybePromise<EitherRight | EitherLeft>;
type ComputeResult<GenericGroup extends Record<string, MayBeGetter<Either>>> = Promise<DEither.EitherSuccess<SimplifyTopLevel<{
    [Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction ? Unwrap<Extract<Awaited<ReturnType<GenericGroup[Prop]>>, EitherRight>> : Unwrap<Extract<Awaited<GenericGroup[Prop]>, EitherRight>>;
}>> | {
    [Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction ? Extract<Awaited<ReturnType<GenericGroup[Prop]>>, EitherLeft> : Extract<Awaited<GenericGroup[Prop]>, EitherLeft>;
}[keyof GenericGroup]>;
export declare function asyncGroup<GenericGroup extends Record<string, MayBeGetter<Either>>>(group: GenericGroup): Extract<ComputeResult<GenericGroup>, any>;
export {};
