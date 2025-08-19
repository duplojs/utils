import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";

export type RequiredKeys<
	GenericObject extends object,
	GenericKeys extends keyof GenericObject = keyof GenericObject,
> = SimplifyTopLevel<
	Required<
		Pick<GenericObject, GenericKeys>
	> &
	GenericObject
>;
