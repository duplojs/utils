import { type Date, type Number, type String, type Time } from "../base";
import { type ToWrappedValue, unwrap, wrapValue, type SortType } from "@scripts/common";
import * as DDate from "@scripts/date";
import * as DNumber from "@scripts/number";
import * as DString from "@scripts/string";

export function sort<
	GenericInput extends (
		| readonly (Date | DDate.TheDate)[]
		| readonly (Number | number)[]
		| readonly (String | string)[]
		| readonly (Time | DDate.TheTime)[]
	),
>(
	type: SortType
): (
	input: GenericInput
) => ToWrappedValue<GenericInput[number]>[];

export function sort<
	GenericInput extends (
		| readonly (Date | DDate.TheDate)[]
		| readonly (Number | number)[]
		| readonly (String | string)[]
		| readonly (Time | DDate.TheTime)[]
	),
>(
	input: GenericInput,
	type: SortType,
): ToWrappedValue<GenericInput[number]>[];

export function sort(
	...args:
		| [SortType]
		| [readonly (Date | Number | String | Time | number | string)[], SortType]
): any {
	if (args.length === 1) {
		const [type] = args;
		return (
			(input: never) => sort(input, type)
		);
	}

	const [input, type] = args;

	const rawArray = input.map(unwrap);
	const first = rawArray.at(0);

	if (!first) {
		return [];
	}

	if (typeof first === "number") {
		return DNumber
			.sort(rawArray as never, type)
			.map(wrapValue);
	} else if (DDate.is(first)) {
		return DDate
			.sort(rawArray as never, type)
			.map(wrapValue);
	} else if (DDate.isTime(first)) {
		return DDate
			.sortTimes(rawArray as never, type)
			.map(wrapValue);
	} else {
		return DString
			.sort(rawArray as never, type)
			.map(wrapValue);
	}
}
