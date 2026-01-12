/**
 * {@include generator/chunk/index.md}
 */
export function chunk<
	const GenericElement extends unknown,
>(
	size: number,
): (input: Iterable<GenericElement>) => Generator<GenericElement[], unknown, unknown>;

export function chunk<
	const GenericElement extends unknown,
>(
	input: Iterable<GenericElement>,
	size: number,
): Generator<GenericElement[], unknown, unknown>;

export function chunk(...args: [number] | [Iterable<unknown>, number]): any {
	if (args.length === 1) {
		const [size] = args;
		return (input: Iterable<unknown>) => chunk(input, size);
	}

	const [input, size] = args;

	return (function *() {
		let buffer: unknown[] = [];

		for (const element of input) {
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
