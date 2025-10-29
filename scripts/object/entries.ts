import { type IsEqual, isRuntimeKind, isRuntimeWrappedValueKey, type ObjectEntry, type ObjectKey } from "@scripts/common";
import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";

export type GetEntry<
	GenericKey extends ObjectKey,
	GenericValue extends unknown,
> = GenericValue extends any
	? GenericKey extends string | number
		? [`${GenericKey}`, GenericValue]
		: never
	: never;

export type GetEntries<
	GenericObject extends object,
> = (
	{
		[Prop in keyof GenericObject]-?: GetEntry<Prop, GenericObject[Prop]>
	}[keyof GenericObject]
) extends infer InferredResult extends ObjectEntry
	? IsEqual<InferredResult, never> extends true
		? []
		: InferredResult[]
	: never;

export function entries<
	GenericObject extends object,
>(object: GenericObject) {
	return Object.entries(object)
		.filter(
			([key]) => !isRuntimeWrappedValueKey(key) && !isRuntimeKind(key),
		) as unknown as SimplifyTopLevel<GetEntries<GenericObject>>;
}
