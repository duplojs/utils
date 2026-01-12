import { type AnyValue } from "./types";

export interface Memoized<
	GenericValue extends unknown,
> {
	readonly value: GenericValue;
}

/**
 * {@include common/memo/index.md}
 */
export function memo<
	GenericOutput extends AnyValue,
>(
	theFunction: () => GenericOutput,
): Memoized<GenericOutput> {
	const payload = {
		get value() {
			const value = theFunction();

			Object.defineProperty(
				payload,
				"value",
				{
					value,
				},
			);

			return value;
		},
	};

	return payload;
}
