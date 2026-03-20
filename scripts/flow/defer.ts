import { createDefer, type Defer } from "./theFlow";

export function *defer<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
): (
		| Generator<Defer<GenericOutput>>
		| (
			GenericOutput extends Promise<unknown>
				? AsyncGenerator<Defer<GenericOutput>>
				: never
		)
	) {
	yield createDefer(theFunction);
}
