import { type AnyFunction, type SimplifyTopLevel, type MayBeGetter, type Unwrap } from "../../common";
import { type EitherLeft } from "../left";
import { type EitherRight } from "./create";
import * as DEither from "..";
type Either = EitherRight | EitherLeft;
type ComputeResult<GenericGroup extends Record<string, MayBeGetter<Either>>> = (DEither.EitherSuccess<SimplifyTopLevel<{
    [Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction ? Unwrap<Extract<ReturnType<GenericGroup[Prop]>, EitherRight>> : Unwrap<Extract<GenericGroup[Prop], EitherRight>>;
}>> | {
    [Prop in keyof GenericGroup]: GenericGroup[Prop] extends AnyFunction ? Extract<ReturnType<GenericGroup[Prop]>, EitherLeft> : Extract<GenericGroup[Prop], EitherLeft>;
}[keyof GenericGroup]);
export declare function group<GenericGroup extends Record<string, MayBeGetter<Either>>>(group: GenericGroup): Extract<ComputeResult<GenericGroup>, any>;
export {};
