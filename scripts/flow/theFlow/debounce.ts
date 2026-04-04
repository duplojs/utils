import { type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const debounceKind = createFlowKind<
	"debounce",
	unknown
>("debounce");

export interface DebounceProperties<
	GenericValue extends unknown = unknown,
> {
	time: number;
	returnValue: GenericValue;
}

export interface Debounce<
	GenericValue extends unknown = unknown,
> extends Kind<
		typeof debounceKind.definition,
		DebounceProperties<GenericValue>
	> {

}

export function createDebounce<
	GenericValue extends unknown,
>(
	properties: DebounceProperties<GenericValue>,
): Debounce<GenericValue> {
	return debounceKind.setTo({}, properties);
}
