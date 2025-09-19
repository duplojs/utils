import { type AnyFunction } from "@scripts/common";

export function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	theFunction: (arg: GenericInput) => GenericOutput
): (iterator: Iterable<GenericInput>) => Generator<GenericOutput, unknown, unknown>;

export function map<
	const GenericInput extends unknown,
	const GenericOutput extends unknown,
>(
	iterator: Iterable<GenericInput>,
	theFunction: (arg: GenericInput) => GenericOutput
): Generator<GenericOutput, unknown, unknown>;

export function map(...args: [Iterable<unknown>, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (iterator: Iterable<unknown>) => map(iterator, theFunction);
	}
	const [iterator, theFunction] = args;

	return (function *() {
		for (const element of iterator) {
			yield theFunction(element);
		}
	})();
}
