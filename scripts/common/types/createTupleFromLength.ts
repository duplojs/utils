import { type AddOne } from "./addOne";
import { type IsEqual } from "./isEqual";

export type CreateTupleFromLength<
	GenericInnerValue extends unknown,
	GenericLength extends number,
	GenericIncrement extends number = 1,
> = IsEqual<GenericLength, number> extends false
	? GenericLength extends GenericIncrement
		? [GenericInnerValue, ...GenericInnerValue[]]
		: [
			GenericInnerValue,
			...(
				GenericIncrement extends 48
					? GenericInnerValue[]
					: CreateTupleFromLength<
						GenericInnerValue,
						GenericLength,
						AddOne<GenericIncrement>
					>
			),
		]
	: GenericInnerValue[];
