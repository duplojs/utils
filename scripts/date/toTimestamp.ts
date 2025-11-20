import { kindHeritage } from "@scripts/common";
import { maxTimestamp, minTimestamp, theDateRegex } from "./constants";
import type { TheDate } from "./types";

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

	if (timestamp < minTimestamp || timestamp > maxTimestamp) {
		throw new InvalidTheDate(input);
	}

	return timestamp;
}
