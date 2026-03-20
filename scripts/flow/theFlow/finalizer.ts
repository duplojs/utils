import { type AnyFunction, type Kind } from "@scripts/common";
import { createFlowKind } from "../kind";

export const finalizerKind = createFlowKind<
	"finalizer",
	AnyFunction<[], unknown>
>("finalizer");

export interface Finalizer<
	GenericValue extends unknown = unknown,
> extends Kind<
		typeof finalizerKind.definition,
		() => GenericValue
	> {

}

export function createFinalizer<
	GenericOutput extends unknown,
>(
	value: () => GenericOutput,
): Finalizer<GenericOutput> {
	return finalizerKind.setTo({}, value);
}
