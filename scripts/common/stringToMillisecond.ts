/* eslint-disable id-length */
import { isKeyof } from "@scripts/string/isKeyof";
import { kindHeritage } from "./kind";
import { createErrorKind } from "./errorKindNamespace";

export class InvalidMillisecondInStringError extends kindHeritage(
	"invalid-millisecond-in-string-error",
	createErrorKind("missing-builder-methods-error"),
	Error,
) {
	public constructor(
		public input: string,
	) {
		super({}, [`Invalid Input: ${input}`]);
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

/**
 * {@include common/stringToMillisecond/index.md}
 */
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

	if (isNaN(value) || !unit || !isKeyof(unit, unitMapper)) {
		throw new InvalidMillisecondInStringError(millisecondInString);
	}

	const millisecond = Math.floor(value * unitMapper[unit]);

	const [otherMillisecondInString, ...restMillisecondInStrings] = millisecondInStrings;

	if (otherMillisecondInString) {
		return millisecond + stringToMillisecond(otherMillisecondInString, ...restMillisecondInStrings);
	}

	return millisecond;
}
