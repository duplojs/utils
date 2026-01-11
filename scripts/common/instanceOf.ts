import * as DArray from "@scripts/array";
import { type AnyConstructor } from "./types";

/**
 * {@include common/instanceOf/index.md}
 */
export function instanceOf<
	GenericInput extends unknown,
	GenericConstructor extends AnyConstructor,
>(
	constructor: GenericConstructor | GenericConstructor[]
): (input: GenericInput) => input is Extract<
	GenericInput,
	InstanceType<GenericConstructor>
>;

export function instanceOf<
	GenericInput extends unknown,
	GenericConstructor extends AnyConstructor,
>(
	input: GenericInput,
	constructor: GenericConstructor | GenericConstructor[],
): input is Extract<
	GenericInput,
	InstanceType<GenericConstructor>
>;

export function instanceOf(
	...args: [unknown, AnyConstructor | AnyConstructor[]]
		| [AnyConstructor | AnyConstructor[]]
) {
	if (args.length === 1) {
		const [constructor] = args;

		return (input: unknown) => instanceOf(input, constructor);
	}

	const [input, constructor] = args;

	const formattedConstructor = DArray.coalescing(constructor);

	for (const constructor of formattedConstructor) {
		if (input instanceof constructor) {
			return true;
		}
	}

	return false;
}
