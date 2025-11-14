import { theDateRegex } from "./constants";
import type { TheDate } from "./types";

export function toTimestamp<
	GenericInput extends TheDate,
>(input: GenericInput) {
	const [, timestampStr, sign] = input.match(theDateRegex)!;

	const timestamp = Number(
		sign === "-"
			? `-${timestampStr}`
			: timestampStr,
	);

	return timestamp;
}
