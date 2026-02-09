import type { AnyFunction, MaybePromise } from "@scripts/common";
import { groupOutput, type GroupFunctionOutput, type GroupFunctionParams, type GroupResult } from "./group";

/**
 * {@include generator/asyncGroup/index.md}
 */
export function asyncGroup<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => MaybePromise<GenericOutput>,
): (asyncIterator: AsyncIterable<GenericElement>) => Promise<GroupResult<GenericOutput>>;

export function asyncGroup<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	asyncIterator: AsyncIterable<GenericElement>,
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => MaybePromise<GenericOutput>,
): Promise<GroupResult<GenericOutput>>;

export function asyncGroup(
	...args:
	| [AsyncIterable<unknown>, AnyFunction<any, MaybePromise<GroupFunctionOutput>>]
	| [AnyFunction]
): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (asyncIterator: AsyncIterable<unknown>) => asyncGroup(asyncIterator, theFunction);
	}

	const [asyncIterator, theFunction] = args;

	const result: Record<string, unknown[]> = {};
	let index = 0;

	return (async() => {
		for await (const element of asyncIterator) {
			const { group, value } = await theFunction(element, {
				index,
				output: groupOutput,
			});

			if (result[group]) {
				result[group].push(value);
			} else {
				result[group] = [value];
			}

			index++;
		}

		return result;
	})();
}
