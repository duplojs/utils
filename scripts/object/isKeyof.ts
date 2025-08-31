import { type ObjectKey } from "@scripts/object/types/objectKey";

export function isKeyof<
	GenericObject extends object,
>(
	obj: GenericObject,
	key: ObjectKey,
): key is keyof GenericObject;
export function isKeyof<
	GenericObject extends object,
>(
	obj: GenericObject,
	key: ObjectKey,
): key is keyof GenericObject;
export function isKeyof(...args: [object, ObjectKey] | [ObjectKey]) {
	if (args.length === 1) {
		const [key] = args;

		return (obj: object) => isKeyof(obj, key);
	}

	const [obj, key] = args;

	return obj[key as never] !== undefined;
}
