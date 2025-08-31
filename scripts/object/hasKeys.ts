import { type ObjectKey } from "./types";
import { type RequiredKeys } from "./types/requiredKeys";

export function hasKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject,
>(
	keys: GenericKeys[],
): (partialObject: GenericObject) => partialObject is RequiredKeys<GenericObject, GenericKeys>;
export function hasKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject,
>(
	partialObject: GenericObject,
	keys: GenericKeys[],
): partialObject is RequiredKeys<GenericObject, GenericKeys>;
export function hasKeys(...args: [object, ObjectKey[]] | [ObjectKey[]]): any {
	if (args.length === 1) {
		const [keys] = args;

		return (partialObject: object) => hasKeys(partialObject, keys as never);
	}
	const [partialObject, keys] = args;

	for (const key of keys) {
		if (partialObject[key as never] === undefined) {
			return false;
		}
	}

	return true;
}
