import { type TheDate, type Timezone, toNative } from "..";

/**
 * {@include date/getYear/index.md}
 */
export function getYear<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const nativeDate = toNative(input);

	if (timezone === "UTC") {
		return nativeDate.getUTCFullYear();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		year: "numeric",
	});

	return Number(formatter.format(nativeDate));
}
