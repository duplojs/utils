import { type TheDate, toNative } from "..";

export function getSecond<
	GenericInput extends TheDate,
>(input: GenericInput): number {
	const nativeDate = toNative(input);
	return nativeDate.getUTCSeconds();
}
