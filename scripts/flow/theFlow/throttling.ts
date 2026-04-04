import { type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const throttlingKind = createFlowKind<
	"throttling",
	unknown
>("throttling");

export interface ThrottlingProperties<
	GenericValue extends unknown = unknown,
> {
	time: number;
	returnValue: GenericValue;
	keepLast: boolean;
}

export interface Throttling<
	GenericValue extends unknown = unknown,
> extends Kind<
		typeof throttlingKind.definition,
		ThrottlingProperties<GenericValue>
	> {

}

export function createThrottling<
	GenericValue extends unknown,
>(
	properties: ThrottlingProperties<GenericValue>,
): Throttling<GenericValue> {
	return throttlingKind.setTo({}, properties);
}
