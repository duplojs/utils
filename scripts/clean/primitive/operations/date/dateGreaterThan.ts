import { unwrap } from "@scripts/common";
import { type Date } from "../../base";
import { type TheDate, greaterThan } from "@scripts/date";

/**
 * {@include clean/dateGreaterThan/index.md}
 */
export function dateGreaterThan(threshold: Date | TheDate): (primitive: Date) => boolean;

export function dateGreaterThan(primitive: Date, threshold: Date | TheDate): boolean;

export function dateGreaterThan(...args: [Date | TheDate] | [Date, Date | TheDate]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (primitive: Date) => dateGreaterThan(primitive, threshold);
	}

	const [primitive, threshold] = args;

	return greaterThan(unwrap(primitive), unwrap(threshold));
}
