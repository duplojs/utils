import { max, type TheDate } from "@scripts/date";
import { type Date } from "../../base";
import { unwrap, wrapValue, type AnyTuple } from "@scripts/common";

export function dateMax(first: Date | TheDate): (...rest: (Date | TheDate)[]) => Date;

export function dateMax(...input: AnyTuple<Date | TheDate>): Date;

export function dateMax(...input: AnyTuple<Date | TheDate>) {
	if (input.length === 1) {
		const [first] = input;
		return (...rest: (Date | TheDate)[]) => (
			dateMax(
				...[first, ...rest] as AnyTuple<Date | TheDate>,
			)
		);
	}

	return wrapValue(
		max(
			input.map(unwrap) as never,
		),
	);
}
