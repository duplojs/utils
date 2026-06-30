import { type AnyTuple } from "@scripts/common";

export type IsCompromiseTuple<
	GenericArray extends AnyTuple,
> = GenericArray extends readonly [...infer InferredRest]
	? unknown extends InferredRest[number]
		? true
		: false
	: false;
