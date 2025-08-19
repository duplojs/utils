import { type ObjectKey } from "@scripts/object/types/objectKey";

export function hasKey<
	GenericObject extends object,
>(
	obj: GenericObject,
	key: ObjectKey,
): key is keyof GenericObject {
	return key in obj;
}
