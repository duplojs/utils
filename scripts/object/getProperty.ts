import { type ObjectKey } from "@scripts/common";
import { type PartialKeys } from "./types";
import { type UnionObjectToIntersection } from "./types/UnionObjectToIntersection";

type MergeTopLevelUnionObject<
	GenericObject extends object,
	GenericFullObjectKeys extends keyof UnionObjectToIntersection<GenericObject>
	= keyof UnionObjectToIntersection<GenericObject>,
> = PartialKeys<
	{
		[Prop in GenericFullObjectKeys]: (
			GenericObject extends object
				? Prop extends keyof GenericObject
					? GenericObject[Prop]
					: never
				: never
		)
	},
	Exclude<
		GenericFullObjectKeys,
		keyof GenericObject
	>
>;

/**
 * {@include object/getProperty/index.md}
 */
export function getProperty<
	GenericObject extends object,
	GenericFullObject extends MergeTopLevelUnionObject<GenericObject>,
	GenericKey extends keyof GenericFullObject,
>(
	key: GenericKey,
): (obj: GenericObject) => GenericFullObject[GenericKey];

export function getProperty<
	GenericObject extends object,
	GenericFullObject extends MergeTopLevelUnionObject<GenericObject>,
	GenericKey extends keyof GenericFullObject,
>(
	obj: GenericObject,
	key: GenericKey,
): GenericFullObject[GenericKey];

export function getProperty(...args: [object, ObjectKey] | [ObjectKey]): any {
	if (args.length === 1) {
		const [key] = args;

		return (obj: object) => getProperty(obj, key as never);
	}
	const [obj, key] = args;

	return obj[key as never];
}
