import { TheDate } from "../theDate";
import { toNative } from "../toNative";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/addYears/index.md}
 */
export function addYears<
	GenericInput extends TheDate | SerializedTheDate,
	GenericYear extends number,
>(
	year: GenericYear,
): (input: GenericInput) => TheDate;

export function addYears<
	GenericInput extends TheDate | SerializedTheDate,
	GenericYear extends number,
>(
	input: GenericInput,
	year: GenericYear,
): TheDate;

export function addYears(...args: [TheDate | SerializedTheDate, number] | [number]) {
	if (args.length === 1) {
		const [year] = args;
		return (input: TheDate | SerializedTheDate) => addYears(input, year);
	}

	const [input, year] = args;

	const date = toNative(input);
	date.setUTCFullYear(date.getUTCFullYear() + year);

	return TheDate.new(date.getTime());
}
