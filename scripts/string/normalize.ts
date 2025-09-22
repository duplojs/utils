import { type NormalizeForm } from "./types/NormalizeForm";

export function normalize(
	form: NormalizeForm,
): (str: string) => string;

export function normalize(
	str: string,
	form: NormalizeForm,
): string;

export function normalize(...args: [string, NormalizeForm] | [NormalizeForm]): any {
	if (args.length === 1) {
		const [form] = args;
		return (str: string) => normalize(str, form);
	}

	const [str, form] = args;

	return str.normalize(form);
}
