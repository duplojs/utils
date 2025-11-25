import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function addYears<
	GenericInput extends TheDate,
	GenericYear extends number,
>(
	year: PositiveNumber<GenericYear>,
): (input: GenericInput) => TheDate;

export function addYears<
	GenericInput extends TheDate,
	GenericYear extends number,
>(
	input: GenericInput,
	year: PositiveNumber<GenericYear>,
): TheDate;

export function addYears(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [year] = args;
		return (input: TheDate) => addYears(input, year);
	}

	const [input, year] = args;
	const absoluteYear = Math.abs(year);

	const date = toNative(input);
	date.setUTCFullYear(date.getUTCFullYear() + absoluteYear);

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
