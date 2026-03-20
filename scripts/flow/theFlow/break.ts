import { type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const breakKind = createFlowKind<
	"break",
	unknown
>("break");

export interface Break<
	GenericValue extends unknown = unknown,
> extends Kind<
		typeof breakKind.definition,
		GenericValue
	> {

}

export function createBreak<
	GenericValue extends unknown = undefined,
>(
	value: GenericValue = undefined as GenericValue,
): Break<GenericValue> {
	return breakKind.setTo({}, value);
}
