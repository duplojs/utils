import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";
import { type ObjectKey } from "./types";

export type GetEntry<
	GenericKey extends ObjectKey,
	GenericValue extends unknown,
> = GenericValue extends any
	? [GenericKey, GenericValue]
	: never;

export type GetEntries<
	GenericObject extends object,
> = {
	[Prop in keyof GenericObject]-?: GetEntry<Prop, GenericObject[Prop]>
}[keyof GenericObject][];

export function entries<
	GenericObject extends object,
>(object: GenericObject) {
	return Object.entries(object) as SimplifyTopLevel<GetEntries<GenericObject>>;
}
