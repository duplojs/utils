import { createTheDate } from "../createTheDate";
import { toNative } from "../toNative";
import type { TheDate } from "../types";

/**
 * {@include date/addYears/index.md}
 */
export function addYears<
	GenericInput extends TheDate,
	GenericYear extends number,
>(
	year: GenericYear,
): (input: GenericInput) => TheDate;

export function addYears<
	GenericInput extends TheDate,
	GenericYear extends number,
>(
	input: GenericInput,
	year: GenericYear,
): TheDate;

export function addYears(...args: [TheDate, number] | [number]) {
	if (args.length === 1) {
		const [year] = args;
		return (input: TheDate) => addYears(input, year);
	}

	const [input, year] = args;

	const date = toNative(input);
	date.setUTCFullYear(date.getUTCFullYear() + year);

	return createTheDate(date.getTime());
}
