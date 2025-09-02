import { type ObjectKey } from "@scripts/object/types/objectKey";

export function isKeyof<
	GenericObject extends object,
	GenericKey extends ObjectKey,
>(
	obj: GenericObject,
): (key: GenericKey) => key is keyof GenericObject & GenericKey;
export function isKeyof<
	GenericObject extends object,
	GenericKey extends ObjectKey,
>(
	key: GenericKey,
	obj: GenericObject,
): key is keyof GenericObject & GenericKey;
export function isKeyof(...args: [ObjectKey, object] | [object]): any {
	if (args.length === 1) {
		const [obj] = args;

		return (key: ObjectKey) => isKeyof(key, obj);
	}

	const [key, obj] = args;

	return obj[key as never] !== undefined;
}
