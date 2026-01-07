import { unwrap } from "@scripts/common";
import { type Time } from "../../base";
import { type TheTime, lessThanTime } from "@scripts/date";

/**
 * {@include clean/timeLessThan/index.md}
 */
export function timeLessThan(threshold: Time | TheTime): (primitive: Time) => boolean;

export function timeLessThan(primitive: Time, threshold: Time | TheTime): boolean;

export function timeLessThan(...args: [Time | TheTime] | [Time, Time | TheTime]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (primitive: Time) => timeLessThan(primitive, threshold);
	}

	const [primitive, threshold] = args;

	return lessThanTime(unwrap(primitive), unwrap(threshold));
}
