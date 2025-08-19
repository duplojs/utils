import { type RequiredKeys } from "./types/requiredKeys";

export function haveKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject,
>(
	partialObject: GenericObject,
	keys: GenericKeys[],
): partialObject is RequiredKeys<GenericObject, GenericKeys> {
	for (const key of keys) {
		if (partialObject[key] === undefined) {
			return false;
		}
	}

	return true;
}
