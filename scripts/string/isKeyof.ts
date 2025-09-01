import { type ObjectKey } from "@scripts/object/types/objectKey";

export function isKeyof<
	GenericObject extends object,
>(
	obj: GenericObject,
): (key: ObjectKey) => key is keyof GenericObject;
export function isKeyof<
	GenericObject extends object,
>(
	key: ObjectKey,
	obj: GenericObject,
): key is keyof GenericObject;
export function isKeyof(...args: [ObjectKey, object] | [object]): any {
	if (args.length === 1) {
		const [obj] = args;

		return (key: ObjectKey) => isKeyof(key, obj);
	}

	const [key, obj] = args;

	return obj[key as never] !== undefined;
}
