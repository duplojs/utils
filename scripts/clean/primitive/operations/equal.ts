import { unwrap, type ToLargeEnsemble, type Unwrap } from "@scripts/common";
import { type Primitive, type Primitives, type Date } from "../base";

export function equal<
	GenericInput extends Primitives,
	GenericValue extends(
		GenericInput extends Date
			? (
				| Date
				| Unwrap<Date>
			)
			: (
				| Primitive<
					ToLargeEnsemble<
						Unwrap<GenericInput>
					>
				>
				| ToLargeEnsemble<
					Unwrap<GenericInput>
				>
			)
	),
>(
	value: GenericValue,
): (input: GenericInput) => input is GenericInput & Primitive<Unwrap<GenericValue>>;

export function equal<
	GenericInput extends Primitives,
	GenericValue extends(
		GenericInput extends Date
			? (
				| Date
				| Unwrap<Date>
			)
			: (
				| Primitive<
					ToLargeEnsemble<
						Unwrap<GenericInput>
					>
				>
				| ToLargeEnsemble<
					Unwrap<GenericInput>
				>
			)
	),
>(
	input: GenericInput,
	value: GenericValue,
): input is GenericInput & Primitive<Unwrap<GenericValue>>;

export function equal(
	...args: [Primitives] | [Primitives, Primitives]
) {
	if (args.length === 1) {
		const [value] = args;
		return (input: Primitives) => equal(input, value);
	}

	const [input, value] = args;

	return unwrap(input) === unwrap(value) as never;
}
