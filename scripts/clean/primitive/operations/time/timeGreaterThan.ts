import { unwrap } from "@scripts/common";
import { type Time } from "../../base";
import { type TheTime, greaterThanTime } from "@scripts/date";

export function timeGreaterThan(threshold: Time | TheTime): (primitive: Time) => boolean;

export function timeGreaterThan(primitive: Time, threshold: Time | TheTime): boolean;

export function timeGreaterThan(...args: [Time | TheTime] | [Time, Time | TheTime]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (primitive: Time) => timeGreaterThan(primitive, threshold);
	}

	const [primitive, threshold] = args;

	return greaterThanTime(unwrap(primitive), unwrap(threshold));
}
