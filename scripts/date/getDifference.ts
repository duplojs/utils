import { makeSafeTimeValue } from "./makeSafeTimeValue";
import type { TheDate } from "./theDate";
import { TheTime } from "./theTime";
import { toTimestamp } from "./toTimestamp";
import type { SerializedTheDate } from "./types";

/**
 * {@include date/getDifference/index.md}
 */
export function getDifference(
	reference: TheDate | SerializedTheDate,
): (input: TheDate | SerializedTheDate) => TheTime;

export function getDifference(
	input: TheDate | SerializedTheDate,
	reference: TheDate | SerializedTheDate,
): TheTime;

export function getDifference(
	...args:
	| [TheDate | SerializedTheDate]
	| [TheDate | SerializedTheDate, TheDate | SerializedTheDate]
) {
	if (args.length === 1) {
		const [reference] = args;
		return (input: TheDate | SerializedTheDate) => getDifference(input, reference);
	}

	const inputTimestamp = toTimestamp(args[0]);
	const referenceTimestamp = toTimestamp(args[1]);

	return TheTime.new(
		makeSafeTimeValue(inputTimestamp - referenceTimestamp),
	);
}
