/* eslint-disable @stylistic/ts/quote-props */

export interface NumberTailer {
	"0": "1";
	"1": "2";
	"2": "3";
	"3": "4";
	"4": "5";
	"5": "6";
	"6": "7";
	"7": "8";
	"8": "9";
	"9": "0";
}

type MakeArrayFromString<
	GenericValue extends string,
> = GenericValue extends `${infer InferredFirst}${infer InferredRest}`
	? [InferredFirst, ...MakeArrayFromString<InferredRest>]
	: [];

type MakeStringFromArray<
	GenericValue extends string[],
> = GenericValue extends [infer InferredFirst extends string, ...infer InferredRest extends string[]]
	? `${InferredFirst}${MakeStringFromArray<InferredRest>}`
	: "";

type MakeNumberFromArray<
	GenericValue extends string[],
> = MakeStringFromArray<GenericValue> extends `${infer InferredValue extends number}`
	? InferredValue
	: never;

export type AddOne<
	GenericValue extends number,
> = MakeArrayFromString<`${GenericValue}`> extends [
	...infer InferredRest extends string[],
	infer InferredLast extends keyof NumberTailer,
]
	? NumberTailer[InferredLast] extends "0"
		? MakeNumberFromArray<[
			InferredRest extends []
				? "1"
				: `${AddOne<MakeNumberFromArray<InferredRest>>}`,
			NumberTailer[InferredLast],
		]>
		: MakeNumberFromArray<[...InferredRest, NumberTailer[InferredLast]]>
	: never;
