import { type TheDate, type Timezone, toNative } from "..";

/**
 * {@include date/getSecond/index.md}
 */
export function getSecond<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const nativeDate = toNative(input);
	if (timezone === "UTC") {
		return nativeDate.getUTCSeconds();
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		second: "numeric",
	});

	return Number(formatter.format(nativeDate));
}
