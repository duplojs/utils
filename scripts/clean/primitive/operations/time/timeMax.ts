import { type TheTime, createTheTime, toTimestamp } from "@scripts/date";
import { type Time } from "../../base";
import { unwrap, wrapValue, type AnyTuple } from "@scripts/common";

export function timeMax(input: AnyTuple<Time | TheTime>): Time {
	return wrapValue(
		createTheTime(
			Math.max(
				...input.map(unwrap).map(toTimestamp),
			),
		),
	);
}
