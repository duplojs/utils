import { type TheDate, toNative } from "..";

export function getMinute<
	GenericInput extends TheDate,
>(input: GenericInput): number {
	const nativeDate = toNative(input);
	return nativeDate.getUTCMinutes();
}
