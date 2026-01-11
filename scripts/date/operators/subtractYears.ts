import { createTheDate } from "../createTheDate";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

/**
 * {@include date/subtractYears/index.md}
 */
export function subtractYears<
	GenericInput extends TheDate,
	GenericYear extends number,
>(
	year: GenericYear,
): (input: GenericInput) => TheDate;

export function subtractYears<
	GenericInput extends TheDate,
	GenericYear extends number,
>(
	input: GenericInput,
	year: GenericYear,
): TheDate;

export function subtractYears(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [year] = args;
		return (input: TheDate) => subtractYears(input, year);
	}

	const [input, year] = args;

	const date = toNative(input);
	date.setUTCFullYear(date.getUTCFullYear() - year);

	return createTheDate(date.getTime());
}
