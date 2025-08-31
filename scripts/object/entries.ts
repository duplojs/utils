import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";

export type GetEntries<
	GenericObject extends object,
	GenericData = {
		[P in keyof GenericObject]-?: GenericObject[P]
	},
> = {
	[Prop in keyof GenericData]: [Prop, GenericData[Prop]]
}[keyof GenericData][];

export function entries<
	GenericObject extends object,
>(object: GenericObject) {
	return Object.entries(object) as SimplifyTopLevel<GetEntries<GenericObject>>;
}
