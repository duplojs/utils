import { memo } from "./memo";

/**
 * {@include common/memoObject/index.md}
 */
export function memoObject<
	GenericOutput extends object,
>(
	getter: () => GenericOutput,
): GenericOutput {
	const memoizedValue = memo<object>(getter);
	let memoizedKeys = memo(() => Object.keys(memoizedValue.value));
	return new Proxy(
		{} as GenericOutput,
		{
			get: (_target, prop) => memoizedValue.value[prop as never],
			set: (_target, prop, value) => {
				(memoizedValue.value[prop as never] as any) = value;

				memoizedKeys = memo(() => Object.keys(memoizedValue.value));

				return true;
			},
			ownKeys() {
				return memoizedKeys.value;
			},
			has(_target, prop) {
				return memoizedKeys.value.includes(prop as never);
			},
			getOwnPropertyDescriptor() {
				return {
					enumerable: true,
					configurable: true,
				};
			},
		},
	);
}
