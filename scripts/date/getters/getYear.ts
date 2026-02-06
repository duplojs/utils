import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import { toNative } from "../toNative";
import type { Timezone } from "../timezone";

/**
 * {@include date/getYear/index.md}
 */
export function getYear<
	GenericInput extends TheDate | SerializedTheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const date = toNative(input);

	if (timezone === "UTC") {
		return date.getUTCFullYear();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		year: "numeric",
	});

	return Number(formatter.format(date));
}
