import { type TheDate, toNative } from "..";

/**
 * {@include date/getMilliseconds/index.md}
 */
export function getMilliseconds<
	GenericInput extends TheDate,
>(input: GenericInput): number {
	const nativeDate = toNative(input);
	return nativeDate.getUTCMilliseconds();
}
