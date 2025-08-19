import { hasKey } from "@scripts/object/hasKey";

/* eslint-disable id-length */
export class InvalidMillisecondInStringError extends Error {
	public constructor(
		public input: string,
	) {
		super(`Invalid Input: ${input}`);
	}

	public static instanceof(value: unknown): value is InvalidMillisecondInStringError {
		return value?.constructor?.name === "InvalidMillisecondInStringError";
	}
}

const unitMapper = {
	ms: 1,
	s: 1000,
	m: 60_000,
	h: 3_600_000,
	d: 86_400_000,
	w: 604_800_000,
};

const parseRegExp = /(?<rawValue>[0-9.]+)(?<unit>ms|s|m|h|d|w)/;

export type MillisecondInString =
	| `${number}${keyof typeof unitMapper}`
	| `${number}.${number}${keyof typeof unitMapper}`;

export function stringToMillisecond(
	millisecondInString: MillisecondInString | number,
	...millisecondInStrings: (MillisecondInString | number)[]
): number {
	if (typeof millisecondInString === "number") {
		return millisecondInString;
	}

	const result = parseRegExp.exec(millisecondInString);

	const { rawValue, unit } = result?.groups ?? {};
	const value = parseFloat(rawValue ?? "");

	if (isNaN(value) || !unit || !hasKey(unitMapper, unit)) {
		throw new InvalidMillisecondInStringError(millisecondInString);
	}

	const millisecond = Math.floor(value * unitMapper[unit]);

	const [otherMillisecondInString, ...restMillisecondInStrings] = millisecondInStrings;

	if (otherMillisecondInString) {
		return millisecond + stringToMillisecond(otherMillisecondInString, ...restMillisecondInStrings);
	}

	return millisecond;
}
