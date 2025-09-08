import { type AnyTuple } from "../../common/types/anyTuple";

export type ShiftTuple<
	GenericArray extends AnyTuple,
> = GenericArray extends readonly [any, ...infer InferredRest]
	? InferredRest
	: never;
