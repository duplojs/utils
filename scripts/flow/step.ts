import { createStep, type Step } from "./theFlow";

/**
 * {@include flow/step/index.md}
 */
export function step<
	GenericName extends string,
	GenericOutput extends unknown = void,
>(
	name: GenericName,
	theFunction?: () => GenericOutput,
): (
	GenericOutput extends Promise<unknown>
		? AsyncGenerator<
			Step<GenericName>,
			Awaited<GenericOutput>
		>
		: Generator<Step<GenericName>, GenericOutput>
	) {
	const result = theFunction?.();

	if (result instanceof Promise) {
		return (async function *() {
			yield createStep(name);
			const awaitedResult = await result;
			return awaitedResult;
		})() as never;
	}

	return (function *() {
		yield createStep(name);
		return result;
	})() as never;
}
