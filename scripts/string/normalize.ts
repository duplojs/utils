import { type NormalizeForm } from "./types/NormalizeForm";

export function normalize(
	form: NormalizeForm,
): (input: string) => string;

export function normalize(
	input: string,
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
