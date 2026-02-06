import { unwrap, wrapValue, type AnyTuple } from "@scripts/common";
import { TheTime, toTimeValue } from "@scripts/date";
import { type Time } from "../../base";

/**
 * {@include clean/timeMin/index.md}
 */
export function timeMin(input: AnyTuple<Time | TheTime>): Time {
	return wrapValue(
		TheTime.new(
			Math.min(
				...input.map(unwrap).map(toTimeValue),
			),
		),
	);
}
