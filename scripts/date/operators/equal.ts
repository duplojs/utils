import type { TheDate } from "../theDate";
import { toTimestamp } from "../toTimestamp";
import type { SerializedTheDate } from "../types";

/**
 * {@include date/equal/index.md}
 */
export function equal(
	second: TheDate | SerializedTheDate,
): (first: TheDate | SerializedTheDate,) => boolean;

export function equal(
	first: TheDate | SerializedTheDate,
	second: TheDate | SerializedTheDate,
): boolean;

export function equal(
	...args:
		| [TheDate | SerializedTheDate]
		| [TheDate | SerializedTheDate, TheDate | SerializedTheDate]
) {
	if (args.length === 1) {
		const [second] = args;

		return (first: TheDate | SerializedTheDate) => equal(first, second);
	}

	const [first, second] = args;

	return toTimestamp(first) === toTimestamp(second);
}
