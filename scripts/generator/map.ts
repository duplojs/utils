import { type AnyFunction } from "@scripts/common";

interface GeneratorMapParams {
	index: number;
}

/**
 * {@include generator/map/index.md}
 */
export function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (arg: GenericInput, params: GeneratorMapParams) => GenericOutput
): (iterator: Iterable<GenericInput>) => Generator<GenericOutput, unknown, unknown>;

export function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	iterator: Iterable<GenericInput>,
	theFunction: (arg: GenericInput, params: GeneratorMapParams) => GenericOutput
): Generator<GenericOutput, unknown, unknown>;

export function map(...args: [Iterable<unknown>, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (iterator: Iterable<unknown>) => map(iterator, theFunction);
	}
	const [iterator, theFunction] = args;

	let index = 0;
	return (function *() {
		for (const element of iterator) {
			yield theFunction(element, { index });
			index++;
		}
	})();
}
