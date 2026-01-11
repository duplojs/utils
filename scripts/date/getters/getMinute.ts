import { type TheDate, type Timezone, toNative } from "..";

/**
 * {@include date/getMinute/index.md}
 */
export function getMinute<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const nativeDate = toNative(input);
	if (timezone === "UTC") {
		return nativeDate.getUTCMinutes();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		minute: "numeric",
	});

	return Number(formatter.format(nativeDate));
}
