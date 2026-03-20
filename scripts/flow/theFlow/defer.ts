import { type AnyFunction, type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const deferKind = createFlowKind<
	"defer",
	AnyFunction<[], unknown>
>("defer");

export interface Defer<
	GenericValue extends unknown = unknown,
> extends Kind<
		typeof deferKind.definition,
		() => GenericValue
	> {

}

export function createDefer<
	GenericOutput extends unknown,
>(
	value: () => GenericOutput,
): Defer<GenericOutput> {
	return deferKind.setTo({}, value);
}
