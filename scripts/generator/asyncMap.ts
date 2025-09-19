import { type AnyFunction } from "@scripts/common";

export function asyncMap<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (arg: GenericInput) => Promise<GenericOutput>
): (iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>) => AsyncGenerator<GenericOutput, unknown, unknown>;

export function asyncMap<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	iterator: AsyncIterable<GenericInput> | Iterable<GenericInput>,
	theFunction: (arg: GenericInput) => Promise<GenericOutput>
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

	return (async function *() {
		for await (const element of iterator) {
			yield theFunction(element);
		}
	})();
}
