import { type AnyTuple } from "../../common/types/anyTuple";

export type PopTuple<
	GenericArray extends AnyTuple,
> = GenericArray extends readonly [...infer InferredRest, any]
	? InferredRest
	: never;
