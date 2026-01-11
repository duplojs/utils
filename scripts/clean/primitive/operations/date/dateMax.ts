import { max, type TheDate } from "@scripts/date";
import { type Date } from "../../base";
import { unwrap, wrapValue, type AnyTuple } from "@scripts/common";

/**
 * {@include clean/dateMax/index.md}
 */
export function dateMax(input: AnyTuple<Date | TheDate>): Date {
	return wrapValue(
		max(
			input.map(unwrap) as never,
		),
	);
}
