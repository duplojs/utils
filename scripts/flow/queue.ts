/* eslint-disable @typescript-eslint/require-await */
import { type OnlyLiteralNumber } from "@scripts/common";
import { createQueue } from "./theFlow";

export async function *queue<
	GenericConcurrency extends number,
>(
	params?: {
		concurrency?: GenericConcurrency & OnlyLiteralNumber<GenericConcurrency>;
	},
) {
	let resolver: (() => void) | undefined = undefined;
	yield createQueue({
		concurrency: params?.concurrency ?? 1,
		injectResolver: (injectResolver) => {
			resolver = injectResolver;
		},
	});

	return resolver!;
}
