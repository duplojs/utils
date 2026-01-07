import { unwrap, wrapValue } from "@scripts/common";
import { type Date, type Time } from "../../base";
import { type TheTime, addTime } from "@scripts/date";

export function dateAddTime(time: Time | TheTime): (primitive: Date) => Date;

export function dateAddTime(primitive: Date, time: Time | TheTime): Date;

export function dateAddTime(...args: [Time | TheTime] | [Date, Time | TheTime]) {
	if (args.length === 1) {
		const [time] = args;
		return (primitive: Date) => dateAddTime(primitive, time);
	}

	const [primitive, time] = args;

	return wrapValue(
		addTime(
			unwrap(primitive),
			unwrap(time),
		),
	);
}
