import { type EscapeVoid } from "@scripts/common";

/**
 * {@include generator/execute/index.md}
 */
export function execute<
	GenericIterator extends AsyncIterable<unknown> | Iterable<unknown>,
>(
	iterator: GenericIterator,
): GenericIterator extends AsyncIterable<unknown> ? Promise<void> : EscapeVoid;

export function execute(
	iterator: AsyncIterable<unknown> | Iterable<unknown>,
) {
	if (Symbol.iterator in iterator) {
		for (const __ of iterator) {

		}
		return;
	} else {
		return (async() => {
			for await (const __ of iterator) {

			}
		})();
	}
}
