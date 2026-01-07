import { unwrap } from "@scripts/common";
import { type Date } from "../../base";
import { type TheDate, lessThan } from "@scripts/date";

/**
 * {@include clean/dateLessThan/index.md}
 */
export function dateLessThan(threshold: Date | TheDate): (primitive: Date) => boolean;

export function dateLessThan(primitive: Date, threshold: Date | TheDate): boolean;

export function dateLessThan(...args: [Date | TheDate] | [Date, Date | TheDate]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (primitive: Date) => dateLessThan(primitive, threshold);
	}

	const [primitive, threshold] = args;

	return lessThan(unwrap(primitive), unwrap(threshold));
}
