/* eslint-disable @typescript-eslint/require-await */
import { createDebounce } from "./theFlow";

/**
 * {@include flow/debounce/index.md}
 */
export async function *debounce<
	GenericValue extends unknown = undefined,
>(
	time: number,
	params?: {
		returnValue?: GenericValue;
	},
) {
	yield createDebounce({
		time,
		returnValue: params?.returnValue,
	});
}
