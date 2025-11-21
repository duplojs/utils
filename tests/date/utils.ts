import { DDate } from "@scripts";

function normalizeIso(input: string) {
	if (!input.startsWith("-")) {
		return input;
	}

	const match = input.match(/^-(?<year>\d+)(?<rest>.*)$/);
	if (!match?.groups) {
		return input;
	}

	const { year, rest } = match.groups as Record<"year" | "rest", string>;
	if (year.length >= 6) {
		return input;
	}

	return `-${year.padStart(6, "0")}${rest}`;
}

export function fromIso(isoString: string) {
	const normalized = normalizeIso(isoString);

	return DDate.createOrThrow(new Date(normalized));
}
