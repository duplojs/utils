import { type AnyFunction } from "@scripts/common";

interface AsyncGeneratorMapParams {
	index: number;
}

export function asyncMap<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => Promise<GenericOutput>
): (iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>) => AsyncGenerator<GenericOutput, unknown, unknown>;

export function asyncMap<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>,
	theFunction: (arg: GenericInput, params: AsyncGeneratorMapParams) => Promise<GenericOutput>
): AsyncGenerator<GenericOutput, unknown, unknown>;

export function asyncMap(
	...args: [AsyncIterable<unknown> | Iterable<unknown>, AnyFunction]
		| [AnyFunction]
): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (iterator: AsyncIterable<unknown>) => asyncMap(iterator, theFunction);
	}
	const [iterator, theFunction] = args;

	let index = 0;
	return (async function *() {
		for await (const element of iterator) {
			yield theFunction(element, { index });
			index++;
		}
	})();
}
