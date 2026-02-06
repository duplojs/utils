import { TheTime, toTimeValue } from "@scripts/date";
import { unwrap, wrapValue, type AnyTuple } from "@scripts/common";
import { type Time } from "../../base";

/**
 * {@include clean/timeMax/index.md}
 */
export function timeMax(input: AnyTuple<Time | TheTime>): Time {
	return wrapValue(
		TheTime.new(
			Math.max(
				...input.map(unwrap).map(toTimeValue),
			),
		),
	);
}
