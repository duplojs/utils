/* eslint-disable id-length */
import { hasKey } from "../object/hasKey";

export class InvalidBytesInStringError extends Error {
	public constructor(
		public input: string,
	) {
		super(`Invalid Input: ${input}`);
	}

	public static instanceof(value: unknown): value is InvalidBytesInStringError {
		return value?.constructor?.name === "InvalidBytesInStringError";
	}
}

const parseRegExp = /(?<rawValue>[0-9.]+)(?<unit>b|kb|mb|gb|tb|pd)/;

const unitMapper = {
	b: 1,
	kb: 1 << 10,
	mb: 1 << 20,
	gb: 1 << 30,
	tb: Math.pow(1024, 4),
	pb: Math.pow(1024, 5),
};

export type BytesInString = `${number}${keyof typeof unitMapper}`;

export function stringToBytes(bytesInString: BytesInString | number) {
	if (typeof bytesInString === "number") {
		return bytesInString;
	}

	const regExpResults = parseRegExp.exec(bytesInString);

	const { rawValue, unit } = regExpResults?.groups ?? {};
	const value = parseFloat(rawValue ?? "");

	if (isNaN(value) || !unit || !hasKey(unitMapper, unit)) {
		throw new InvalidBytesInStringError(bytesInString);
	}

	return Math.floor(unitMapper[unit] * value);
}
