import { type TheDate, type Timezone, toNative } from "..";

/**
 * {@include date/getHour/index.md}
 */
export function getHour<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const nativeDate = toNative(input);

	if (timezone === "UTC") {
		return nativeDate.getUTCHours();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		hour: "numeric",
		hour12: false,
	});

	return Number(formatter.format(nativeDate));
}
