import { type Date, type Number, type String } from "../base";
import { unwrap, wrapValue, type SortType } from "@scripts/common";
import * as DDate from "@scripts/date";
import * as DNumber from "@scripts/number";
import * as DString from "@scripts/string";

export function sort(type: SortType): (input: readonly (Date | DDate.TheDate)[]) => Date[];
export function sort(input: readonly (Date | DDate.TheDate)[], type: SortType): Date[];

export function sort(type: SortType): (input: readonly (Number | number)[]) => Number[];
export function sort(input: readonly (Number | number)[], type: SortType): Number[];

export function sort(type: SortType): (input: readonly (String | string)[]) => String[];
export function sort(input: readonly (String | string)[], type: SortType): String[];

export function sort(
	...args:
		| [SortType]
		| [readonly (Date | Number | String | number | string)[], SortType]
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
	} else {
		return DString
			.sort(rawArray as never, type)
			.map(wrapValue);
	}
}
