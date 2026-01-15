import { type MaybeArray } from "./maybeArray";

export type Json = MaybeArray<
	| string
	| undefined
	| boolean
	| number
	| null
	| { [key: string]: Json }
>;
