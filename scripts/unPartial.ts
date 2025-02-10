import type { ObjectKey } from "./types";

export class UnPartialError extends Error {
	public constructor(
		public key: ObjectKey,
		public partialObject: object,
	) {
		super(`The key "${key.toString()}" is missing in partial object.`);
	}
}

export type UnPartial<
	T extends object,
	K extends keyof T,
> = T & {
	[P in K]-?: Exclude<T[P], undefined>
};

export function unPartial<
	T extends object,
	K extends keyof T,
>(partialObject: T, keys: K[]) {
	keys.forEach((key) => {
		if (partialObject[key] === undefined) {
			throw new UnPartialError(key, partialObject);
		}
	});

	return partialObject as UnPartial<T, K>;
}
