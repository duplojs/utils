import type { SerializedTheDate } from "../types";
import type { TheDate } from "../theDate";
import type { Timezone } from "../timezone";
import { toNative } from "../toNative";

/**
 * {@include date/getDayOfMonth/index.md}
 */
export function getDayOfMonth<
	GenericInput extends TheDate | SerializedTheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const date = toNative(input);

	if (timezone === "UTC") {
		return date.getUTCDate();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		day: "numeric",
	});

	return Number(formatter.format(date));
}
