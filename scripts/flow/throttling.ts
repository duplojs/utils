/* eslint-disable @typescript-eslint/require-await */
import { type OnlyLiteralBoolean, type IsEqual } from "@scripts/common";
import { createThrottling, type Throttling } from "./theFlow";

/**
 * {@include flow/throttling/index.md}
 */
export function throttling<
	GenericValue extends unknown = undefined,
	GenericKeepLast extends boolean = false,
>(
	time: number,
	params?: {
		returnValue?: GenericValue;
		keepLast?: GenericKeepLast & OnlyLiteralBoolean<GenericKeepLast>;
	},
): IsEqual<GenericKeepLast, true> extends true
		? AsyncGenerator<Throttling<NoInfer<GenericValue>>, undefined>
		: Generator<Throttling<NoInfer<GenericValue>>, undefined> {
	if (params?.keepLast === true) {
		return (async function *() {
			yield createThrottling({
				time,
				returnValue: params?.returnValue,
				keepLast: true,
			});
		})() as never;
	}

	return (function *() {
		yield createThrottling({
			time,
			returnValue: params?.returnValue,
			keepLast: false,
		});
	})() as never;
}
