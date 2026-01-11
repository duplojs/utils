import { type TheDate, type Timezone, toNative } from "..";

/**
 * {@include date/getDayOfMonth/index.md}
 */
export function getDayOfMonth<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const nativeDate = toNative(input);

	if (timezone === "UTC") {
		return nativeDate.getUTCDate();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		day: "numeric",
	});

	return Number(formatter.format(nativeDate));
}
