import { type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const stepKind = createFlowKind<
	"step",
	string
>("step");

export interface Step<
	GenericName extends string = string,
> extends Kind<
		typeof stepKind.definition,
		GenericName
	> {

}

export function createStep<
	GenericName extends string,
>(
	name: GenericName,
): Step<GenericName> {
	return stepKind.setTo({}, name);
}

