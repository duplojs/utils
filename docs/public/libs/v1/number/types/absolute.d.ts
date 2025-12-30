import type * as DString from "../../string";
import type * as DArray from "../../array";
import { type AnyTuple, type Adaptor } from "../../common";
import { type IsPositive } from "./isPositive";
export type Absolute<GenericValue extends number> = IsPositive<GenericValue> extends true ? GenericValue : DArray.JoinTuple<DArray.ShiftTuple<Adaptor<DString.Split<`${GenericValue}`, "">, AnyTuple<string>>>, ""> extends `${infer InferredResult extends number}` ? InferredResult : never;
