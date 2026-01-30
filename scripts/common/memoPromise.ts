import { createExternalPromise } from "./externalPromise";
import { forward } from "./forward";
import { type MaybePromise } from "./types";

export interface MemoizedPromise<
	GenericValue extends unknown,
> {
	readonly value: MaybePromise<GenericValue>;
}

/**
 * {@include common/memoPromise/index.md}
 */
export function memoPromise<
	GenericOutput extends unknown,
>(
	theFunction: () => MaybePromise<GenericOutput>,
): MemoizedPromise<GenericOutput> {
	let externalPromise = forward<
		ReturnType<typeof createExternalPromise<GenericOutput>> | undefined
	>(undefined);

	const payload = {
		get value() {
			if (externalPromise) {
				return externalPromise.promise;
			}

			externalPromise = createExternalPromise();
			const { resolve, reject } = externalPromise;

			const promise = theFunction();

			void (
				promise instanceof Promise
					? promise
					: Promise.resolve(promise)
			)
				.then((result) => {
					Object.defineProperty(
						payload,
						"value",
						{
							value: result,
						},
					);

					resolve(result);
				})
				.catch(reject);

			return externalPromise.promise;
		},
	};

	return payload;
}
