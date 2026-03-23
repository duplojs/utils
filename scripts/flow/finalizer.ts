import { createFinalizer, type Finalizer } from "./theFlow";

export function *finalizer<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
): (
	| Generator<Finalizer<GenericOutput>, undefined>
	| (
		GenericOutput extends Promise<unknown>
			? AsyncGenerator<Finalizer<GenericOutput>, undefined>
			: never
	)
	) {
	yield createFinalizer(theFunction);
}
