import type { AnyFunction } from "./types";

const prototypeKeyWrapper: Partial<Record<string, null>> = Object.fromEntries(Object.getOwnPropertyNames(
	Object.getPrototypeOf(Object),
).map((name) => [name, null]));

export function bindPrototypeMethods(instance: object): void {
	let currentPrototype = Object.getPrototypeOf(instance);
	const alreadySeenKeys: Partial<Record<string, null>> = {};

	while (
		currentPrototype
		&& currentPrototype !== Object.prototype
	) {
		for (const propertyKey of Object.getOwnPropertyNames(currentPrototype)) {
			if (prototypeKeyWrapper[propertyKey] === null) {
				continue;
			}

			if (alreadySeenKeys[propertyKey] === null) {
				continue;
			}

			alreadySeenKeys[propertyKey] = null;

			const description = Object.getOwnPropertyDescriptor(currentPrototype, propertyKey);

			if (
				!description
				|| typeof description.value !== "function"
				|| description.writable === false
			) {
				continue;
			}

			(instance[propertyKey as never] as any) = (description.value as AnyFunction).bind(instance);
		}

		currentPrototype = Object.getPrototypeOf(currentPrototype);
	}
}
