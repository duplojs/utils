import { type TheDate, type Timezone, toNative } from "..";

export function getMonth<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const nativeDate = toNative(input);

	if (timezone === "UTC") {
		return nativeDate.getUTCMonth() + 1;
	}

	const formatter = new Intl.DateTimeFormat("en-US", {
		timeZone: timezone,
		month: "numeric",
	});

	return Number(formatter.format(nativeDate));
}
