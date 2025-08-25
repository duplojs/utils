import { type TheValue } from "@scripts/common/theValue";

export type WrappedObject<
	GenericObject extends object = object,
> = TheValue<GenericObject>;
