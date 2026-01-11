import { type TheTime, createTheTime, toTimeValue } from "@scripts/date";
import { type Time } from "../../base";
import { unwrap, wrapValue, type AnyTuple } from "@scripts/common";

/**
 * {@include clean/timeMax/index.md}
 */
export function timeMax(input: AnyTuple<Time | TheTime>): Time {
	return wrapValue(
		createTheTime(
			Math.max(
				...input.map(unwrap).map(toTimeValue),
			),
		),
	);
}
