import { createFinalizer, type Finalizer } from "./theFlow";

export function *finalizer<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
): (
	| Generator<Finalizer<GenericOutput>>
	| (
		GenericOutput extends Promise<unknown>
			? AsyncGenerator<Finalizer<GenericOutput>>
			: never
	)
	) {
	yield createFinalizer(theFunction);
}
