/**
 * {@include generator/asyncChunk/index.md}
 */
export function asyncChunk<
	const GenericElement extends unknown,
>(
	size: number,
): (input: AsyncIterable<GenericElement>) => AsyncGenerator<GenericElement[], unknown, unknown>;

export function asyncChunk<
	const GenericElement extends unknown,
>(
	input: AsyncIterable<GenericElement>,
	size: number,
): AsyncGenerator<GenericElement[], unknown, unknown>;

export function asyncChunk(...args: [number] | [AsyncIterable<unknown>, number]): any {
	if (args.length === 1) {
		const [size] = args;
		return (input: AsyncIterable<unknown>) => asyncChunk(input, size);
	}

	const [input, size] = args;

	return (async function *() {
		let buffer: unknown[] = [];

		for await (const element of input) {
			buffer.push(element);

			if (buffer.length === size) {
				yield buffer;
				buffer = [];
			}
		}

		if (buffer.length > 0) {
			yield buffer;
		}
	})();
}
