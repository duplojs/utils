import { createDefer, type Defer } from "./theFlow";

export function *defer<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
): (
		| Generator<Defer<GenericOutput>, undefined>
		| (
			GenericOutput extends Promise<unknown>
				? AsyncGenerator<Defer<GenericOutput>, undefined>
				: never
		)
	) {
	yield createDefer(theFunction);
}
