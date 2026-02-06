import type { SerializedTheDate } from "../types";
import type { TheDate } from "../theDate";
import { toNative } from "../toNative";
import type { Timezone } from "../timezone";

/**
 * {@include date/getSecond/index.md}
 */
export function getSecond<
	GenericInput extends TheDate | SerializedTheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const date = toNative(input);

	if (timezone === "UTC") {
		return date.getUTCSeconds();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		second: "numeric",
	});

	return Number(formatter.format(date));
}
