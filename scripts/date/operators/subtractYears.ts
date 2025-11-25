import { toNative } from "../toNative";
import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";

export function subtractYears<
	GenericInput extends TheDate,
	GenericYear extends number,
>(
	year: PositiveNumber<GenericYear>,
): (input: GenericInput) => TheDate;

export function subtractYears<
	GenericInput extends TheDate,
	GenericYear extends number,
>(
	input: GenericInput,
	year: PositiveNumber<GenericYear>,
): TheDate;

export function subtractYears(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [year] = args;
		return (input: TheDate) => subtractYears(input, year);
	}

	const [input, year] = args;

	const date = toNative(input);
	const absoluteYear = Math.abs(year);
	date.setUTCFullYear(date.getUTCFullYear() - absoluteYear);

	const timestamp = date.getTime();
	const isNegative = timestamp < 0;

	return `date${Math.abs(timestamp)}${isNegative ? "-" : "+"}` satisfies TheDate;
}
