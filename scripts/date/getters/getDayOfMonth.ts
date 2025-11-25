import { type TheDate, type Timezone, toNative } from "..";

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
