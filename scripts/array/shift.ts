import { type ExpectType } from "@scripts/common";

type Shift<
	GenericArray extends readonly unknown[],
> = GenericArray extends readonly [any, ...infer Rest]
	? Rest
	: GenericArray;

export function shift<
	const GenericArray extends readonly unknown[],
>(array: GenericArray): Shift<GenericArray> {
	return array.slice(1) as never;
}

const arr = [1, 2, 3];
const tt = shift(arr);

type check = ExpectType<
			typeof tt,
	number[],
	"strict"
>;
