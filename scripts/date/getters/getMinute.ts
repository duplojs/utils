import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import { toNative } from "../toNative";
import { type Timezone } from "../timezone";

/**
 * {@include date/getMinute/index.md}
 */
export function getMinute<
	GenericInput extends TheDate | SerializedTheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const date = toNative(input);

	if (timezone === "UTC") {
		return date.getUTCMinutes();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		minute: "numeric",
	});

	return Number(formatter.format(date));
}
