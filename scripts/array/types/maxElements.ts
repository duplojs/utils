import { type Kind } from "@scripts/common";

export interface MaxElements<
	GenericMax extends number,
> extends Kind<
		{
			name: "array-max-element";
			value: Record<number, unknown>;
		},
		Record<GenericMax, unknown>
	> {

}
