import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";

export type MergeObjects<
	GenericFirstObject extends object,
	GenericSecondObject extends object,
> = SimplifyTopLevel<
	GenericSecondObject & {
		[Prop in Exclude<keyof GenericFirstObject, keyof GenericSecondObject>]: GenericFirstObject[Prop];
	}
>;
