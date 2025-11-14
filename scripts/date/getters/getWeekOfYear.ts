import { type TheDate, type Timezone, toNative } from "..";

export function getWeekOfYear<
	GenericInput extends TheDate,
>(
	input: GenericInput,
	timezone: Timezone = "UTC",
): number {
	const nativeDate = toNative(input);

	let year = 0;
	let month = 0;
	let day = 0;

	if (timezone === "UTC") {
		year = nativeDate.getUTCFullYear();
		month = nativeDate.getUTCMonth();
		day = nativeDate.getUTCDate();
	} else {
		const parts = new Intl.DateTimeFormat("en-US", {
			timeZone: timezone,
			day: "numeric",
			year: "numeric",
			month: "numeric",
		}).formatToParts(nativeDate);

		const partsMap = new Map(parts.map((part) => [part.type, part.value]));
		year = Number(partsMap.get("year"));
		month = Number(partsMap.get("month")) - 1;
		day = Number(partsMap.get("day"));
	}

	const date = new Date(Date.UTC(year, month, day));
	const dayOfWeek = date.getUTCDay() || 7;
	const nearestThursday = day + 4 - dayOfWeek;

	date.setUTCDate(nearestThursday);
	const thursYearStart = Date.UTC(date.getUTCFullYear(), 0, 1);
	const millisecondsDiff = date.getTime() - thursYearStart;
	const daysDiff = Math.floor(millisecondsDiff / 86400000);

	return Math.ceil((daysDiff + 1) / 7);
}
