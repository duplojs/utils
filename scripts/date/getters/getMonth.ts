import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import { toNative } from "../toNative";
import type { Timezone } from "../timezone";

/**
 * {@include date/getMonth/index.md}
 */
export function getMonth<
	GenericInput extends TheDate | SerializedTheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const date = toNative(input);

	if (timezone === "UTC") {
		return date.getUTCMonth() + 1;
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		month: "numeric",
	});

	return Number(formatter.format(date));
}
