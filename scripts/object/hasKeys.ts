import { type ObjectKey } from "@scripts/common";
import { type RequiredKeys } from "./types/requiredKeys";

export function hasKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject,
>(
	keys: GenericKeys | GenericKeys[],
): (partialObject: GenericObject) => partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>;

export function hasKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject,
>(
	partialObject: GenericObject,
	keys: GenericKeys | GenericKeys[],
): partialObject is RequiredKeys<GenericObject, NoInfer<GenericKeys>>;

export function hasKeys(...args: [object, ObjectKey | ObjectKey[]] | [ObjectKey | ObjectKey[]]): any {
	if (args.length === 1) {
		const [keys] = args;

		return (partialObject: object) => hasKeys(partialObject, keys as never);
	}
	const [partialObject, keys] = args;

	const formattedKey = keys instanceof Array ? keys : [keys];

	for (const key of formattedKey) {
		if (partialObject[key as never] === undefined) {
			return false;
		}
	}

	return true;
}
