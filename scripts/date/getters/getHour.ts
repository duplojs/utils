import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import { toNative } from "../toNative";
import type { Timezone } from "../timezone";

/**
 * {@include date/getHour/index.md}
 */
export function getHour<
	GenericInput extends TheDate | SerializedTheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const date = toNative(input);

	if (timezone === "UTC") {
		return date.getUTCHours();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		hour: "numeric",
		hour12: false,
	});

	return Number(formatter.format(date));
}
