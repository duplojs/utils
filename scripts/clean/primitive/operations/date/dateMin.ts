import { min, type TheDate } from "@scripts/date";
import { type Date } from "../../base";
import { unwrap, wrapValue, type AnyTuple } from "@scripts/common";

export function dateMin(first: Date | TheDate): (...rest: (Date | TheDate)[]) => Date;

export function dateMin(...input: AnyTuple<Date | TheDate>): Date;

export function dateMin(...input: AnyTuple<Date | TheDate>) {
	if (input.length === 1) {
		const [first] = input;
		return (...rest: (Date | TheDate)[]) => (
			dateMin(
				...[first, ...rest] as AnyTuple<Date | TheDate>,
			)
		);
	}

	return wrapValue(
		min(
			input.map(unwrap) as never,
		),
	);
}
