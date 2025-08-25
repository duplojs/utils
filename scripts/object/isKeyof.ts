import { type ObjectKey } from "@scripts/object/types/objectKey";

export function isKeyofObject<
	GenericObject extends object,
>(
	obj: GenericObject,
	key: ObjectKey,
): key is keyof GenericObject {
	return key in obj && obj[key as never] !== undefined;
}
