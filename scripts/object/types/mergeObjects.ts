import { type SimplifyObjectTopLevel } from "../simplifyType";

export type MergeObjects<
	GenericFirstObject extends object,
	GenericSecondObject extends object,
> = SimplifyObjectTopLevel<
	GenericSecondObject & {
		[Prop in Exclude<keyof GenericFirstObject, keyof GenericSecondObject>]: GenericFirstObject[Prop];
	}
>;
