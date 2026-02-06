import { TheDate } from "../theDate";
import { toNative } from "../toNative";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/subtractYears/index.md}
 */
export function subtractYears<
	GenericInput extends TheDate | SerializedTheDate,
	GenericYear extends number,
>(
	year: GenericYear,
): (input: GenericInput) => TheDate;

export function subtractYears<
	GenericInput extends TheDate | SerializedTheDate,
	GenericYear extends number,
>(
	input: GenericInput,
	year: GenericYear,
): TheDate;

export function subtractYears(
	...args: [TheDate | SerializedTheDate, number] | [number]
) {
	if (args.length === 1) {
		const [year] = args;
		return (input: TheDate | SerializedTheDate) => subtractYears(input, year);
	}

	const [input, year] = args;

	const date = toNative(input);
	date.setUTCFullYear(date.getUTCFullYear() - year);

	return TheDate.new(date.getTime());
}
