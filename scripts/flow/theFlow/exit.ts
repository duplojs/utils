import { type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const exitKind = createFlowKind<
	"exit",
	unknown
>("exit");

export interface Exit<
	GenericValue extends unknown = unknown,
> extends Kind<
		typeof exitKind.definition,
		GenericValue
	> {

}

export function createExit<
	GenericValue extends unknown = undefined,
>(
	value: GenericValue = undefined as GenericValue,
): Exit<GenericValue> {
	return exitKind.setTo({}, value);
}
