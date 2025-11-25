import { kindHeritage } from "@scripts/common";
import { maxTimestamp, minTimestamp, theDateRegex } from "./constants";
import type { TheDate } from "./types";
import { isSafeTimestamp } from "./isSafeTimestamp";

export class InvalidTheDate extends kindHeritage("duplo-utils-invalide-date", [], Error) {
	public constructor(public date: TheDate) {
		super({}, ["invalide-date"]);
	}
}

export function toTimestamp<
	GenericInput extends TheDate,
>(input: GenericInput) {
	const match = input.match(theDateRegex);

	if (!match) {
		throw new InvalidTheDate(input);
	}

	const { value, sign } = match.groups as Record<"value" | "sign", string>;

	const timestamp = Number(
		sign === "-"
			? `-${value}`
			: value,
	);

	if (!isSafeTimestamp(timestamp)) {
		throw new InvalidTheDate(input);
	}

	return timestamp;
}
