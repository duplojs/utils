import { type MaybePromise } from "@scripts/common/types/maybePromise";
import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";

export type AwaitedPromiseObject<
	GenericObject extends Record<string, MaybePromise<unknown>>,
> = {
	[Prop in keyof GenericObject]: Awaited<GenericObject[Prop]>
};

export function promiseObject<
	GenericObject extends Record<string, MaybePromise<unknown>>,
>(object: GenericObject) {
	return Promise
		.all(
			Object.entries(object)
				.map<MaybePromise<[string, unknown]>>(
					([key, promisedValue]) => promisedValue instanceof Promise
						? promisedValue.then((value) => [key, value])
						: [key, promisedValue],
				),
		)
		.then(
			(entries) => Object.fromEntries(entries) as SimplifyTopLevel<AwaitedPromiseObject<GenericObject>>,
		);
}
