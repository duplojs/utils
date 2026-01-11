import { type NormalizeForm } from "./types/normalizeForm";

/**
 * {@include string/normalize/index.md}
 */
export function normalize<
	GenericInput extends string,
>(
	form: NormalizeForm,
): (input: GenericInput) => string;

export function normalize<
	GenericInput extends string,
>(
	input: GenericInput,
	form: NormalizeForm,
): string;

export function normalize(...args: [string, NormalizeForm] | [NormalizeForm]): any {
	if (args.length === 1) {
		const [form] = args;
		return (input: string) => normalize(input, form);
	}

	const [input, form] = args;

	return input.normalize(form);
}
