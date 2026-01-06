import { min, type TheDate } from "@scripts/date";
import { type Date } from "../../base";
import { unwrap, wrapValue, type AnyTuple } from "@scripts/common";

export function dateMin(input: AnyTuple<Date | TheDate>): Date {
	return wrapValue(
		min(
			input.map(unwrap) as never,
		),
	);
}
