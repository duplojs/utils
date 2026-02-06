import type { SerializedTheDate } from "../types";
import { type TheDate } from "../theDate";
import { toNative } from "../toNative";

/**
 * {@include date/getMilliseconds/index.md}
 */
export function getMilliseconds<
	GenericInput extends TheDate | SerializedTheDate,
>(input: GenericInput): number {
	const date = toNative(input);

	return date.getUTCMilliseconds();
}
