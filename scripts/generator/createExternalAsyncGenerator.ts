const exitExternalAsync = Symbol("exitExternalAsync");

/**
 * {@include generator/createExternalAsyncGenerator/index.md}
 */
export function createExternalAsyncGenerator<
	GenericValue extends unknown,
>() {
	let externalResolve = undefined as undefined | ((value: GenericValue | typeof exitExternalAsync) => void);

	return {
		asyncGenerator: (async function *() {
			const result = await new Promise<
				GenericValue | typeof exitExternalAsync
			>(
				(resolve) => {
					externalResolve = resolve;
				},
			);

			if (result === exitExternalAsync) {
				return;
			} else {
				yield result;
			}
		})(),
		next: (value: GenericValue) => void externalResolve?.(value),
		exit: () => void externalResolve?.(exitExternalAsync),
	};
}
