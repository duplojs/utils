import { type TheDate, toNative } from "..";

export function getMilliseconds<
	GenericInput extends TheDate,
>(input: GenericInput): number {
	const nativeDate = toNative(input);
	return nativeDate.getUTCMilliseconds();
}
