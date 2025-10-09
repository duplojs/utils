import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";

export type AssignObjects<
	GenericFirstObject extends object,
	GenericSecondObject extends object,
> = SimplifyTopLevel<
	& Omit<GenericFirstObject, keyof GenericSecondObject>
	& GenericSecondObject
>;
