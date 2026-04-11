import { unwrap, type Unwrap } from "@scripts/common";
import { type Primitive, type Primitives } from "../base";

/**
 * {@include clean/equal/index.md}
 */
export function equal<
	GenericInput extends Primitives | null,
	const GenericValue extends(
		| Primitive<
			Unwrap<
				Exclude<GenericInput, null>
			>
		>
		| Unwrap<GenericInput>
	),
>(
	value: GenericValue,
): (input: GenericInput) => input is (
	& GenericInput
	& (
		GenericValue extends null
			? GenericValue
			: Primitive<
				Unwrap<
					Exclude<GenericValue, null>
				>
			>
	)
);

export function equal<
	GenericInput extends Primitives | null,
	const GenericValue extends(
		| Primitive<
			Unwrap<
				Exclude<GenericInput, null>
			>
		>
		| Unwrap<GenericInput>
	),
>(
	input: GenericInput,
	value: GenericValue,
): input is (
	& GenericInput
	& (
		GenericValue extends null
			? GenericValue
			: Primitive<
				Unwrap<
					Exclude<GenericValue, null>
				>
			>
	)
);

export function equal(
	...args: [Primitives | null] | [Primitives | null, Primitives | null]
) {
	if (args.length === 1) {
		const [value] = args;
		return (input: Primitives | null) => equal(input, value);
	}

	const [input, value] = args;

	if (input === null || value === null) {
		return input === value;
	}

	return unwrap(input).toString() === unwrap(value).toString() as never;
}
