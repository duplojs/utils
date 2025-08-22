import { type TheValue } from "@scripts/common/theValue";

export type EmbeddedObject<
	GenericObject extends object = object,
> = TheValue<GenericObject>;
