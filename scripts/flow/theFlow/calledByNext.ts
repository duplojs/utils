import { type AnyFunction, type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const calledByNextKind = createFlowKind<
	"called-by-next",
	AnyFunction<[], unknown>
>("called-by-next");

export interface CalledByNext<
	GenericValue extends unknown = unknown,
> extends Kind<
		typeof calledByNextKind.definition,
		() => GenericValue
	> {

}

export function createCalledByNext<
	GenericOutput extends unknown,
>(
	value: () => GenericOutput,
): CalledByNext<GenericOutput> {
	return calledByNextKind.setTo({}, value);
}
