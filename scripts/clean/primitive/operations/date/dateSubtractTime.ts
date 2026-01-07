import { unwrap, wrapValue } from "@scripts/common";
import { type Date, type Time } from "../../base";
import { type TheTime, subtractTime } from "@scripts/date";

export function dateSubtractTime(time: Time | TheTime): (primitive: Date) => Date;

export function dateSubtractTime(primitive: Date, time: Time | TheTime): Date;

export function dateSubtractTime(...args: [Time | TheTime] | [Date, Time | TheTime]) {
	if (args.length === 1) {
		const [time] = args;
		return (primitive: Date) => dateSubtractTime(primitive, time);
	}

	const [primitive, time] = args;

	return wrapValue(
		subtractTime(
			unwrap(primitive),
			unwrap(time),
		),
	);
}
