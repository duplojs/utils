/**
 * {@include common/externalPromise/index.md}
 */
export function createExternalPromise<
	GenericPromiseValue extends unknown,
>() {
	type PossibleValue = Awaited<GenericPromiseValue> | GenericPromiseValue | Promise<GenericPromiseValue>;

	let resolve = undefined as unknown as (_value: PossibleValue) => void;
	let reject = undefined as unknown as (_value: unknown) => void;
	const promise = new Promise<Awaited<GenericPromiseValue>>((res, rej) => {
		resolve = res as never;
		reject = rej;
	});

	return {
		resolve,
		reject,
		promise,
	};
}
