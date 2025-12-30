import { type AnyTuple, type IsEqual } from "@scripts/common";
import { type ShiftTuple } from "./shiftTuple";

export type JoinTuple<
	GenericArray extends AnyTuple<string> | readonly [],
	GenericSeparator extends string,
	GenericDepth extends readonly unknown[] = [],
> = GenericArray extends AnyTuple<string>
	? IsEqual<GenericDepth["length"], 100> extends true
		? string
		: ShiftTuple<GenericArray> extends infer InferredRest extends readonly string[]
			? InferredRest extends AnyTuple<string>
				? JoinTuple<
					InferredRest,
					GenericSeparator,
					[...GenericDepth, 0]
				> extends infer InferredRestResult extends string
					? `${GenericArray[0]}${GenericSeparator}${InferredRestResult}`
					: never
				: InferredRest extends readonly []
					? GenericArray[0]
					: `${GenericArray[0]}${GenericSeparator}${string}`
			: never
	: "";
