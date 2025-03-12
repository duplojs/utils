import { type SimplifyObjectTopLevel } from "./simplifyType";

export type MergeObject<
	GenericFirstObject extends object,
	GenericSecondObject extends object,
> = SimplifyObjectTopLevel<
	GenericSecondObject & {
		[Prop in Exclude<keyof GenericFirstObject, keyof GenericSecondObject>]: GenericFirstObject[Prop];
	}
>;
