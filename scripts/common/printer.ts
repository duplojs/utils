import * as DString from "@scripts/string";

export namespace Printer {
	const codeColors = {
		red: "\x1b[31m",
		green: "\x1b[32m",
		yellow: "\x1b[33m",
		blue: "\x1b[34m",
		magenta: "\x1b[35m",
		cyan: "\x1b[36m",
		gray: "\x1b[90m",
	} as const;

	const codeBold = "\x1b[1m";
	const codeReset = "\x1b[0m";

	export const tab = "\t";
	export const back = "\n";
	export const dash = "-";

	export type Colors = keyof typeof codeColors;

	export function colorized<
		GenericInput extends string,
	>(
		color: Colors,
	): (input: GenericInput) => string;
	export function colorized<
		GenericInput extends string,
	>(
		input: GenericInput,
		color: Colors,
	): string;
	export function colorized(...args: [string, Colors] | [Colors]) {
		if (args.length === 1) {
			const [color] = args;

			return (input: string) => colorized(input, color);
		}

		const [input, color] = args;

		return `${codeColors[color]}${input}${codeReset}`;
	}

	export function bold(input: string) {
		return `${codeBold}${input}${codeReset}`;
	}

	export function colorizedBold<
		GenericInput extends string,
	>(
		color: Colors,
	): (input: GenericInput) => string;
	export function colorizedBold<
		GenericInput extends string,
	>(
		input: GenericInput,
		color: Colors,
	): string;
	export function colorizedBold(...args: [string, Colors] | [Colors]) {
		if (args.length === 1) {
			const [color] = args;

			return (input: string) => colorizedBold(input, color);
		}

		const [input, color] = args;

		return bold(colorized(input, color));
	}

	export function indent(level: number) {
		return DString.repeat(tab, level);
	}

	export function stringify(value: unknown) {
		try {
			return JSON.stringify(value);
		} catch {
			return String(value);
		}
	}

	export type RenderInput = string | boolean | null | undefined | RenderInput[];

	export function render<
		GenericValues extends readonly RenderInput[],
	>(
		joinCharacter: string,
	): (values: GenericValues) => string;
	export function render<
		GenericValues extends readonly RenderInput[],
	>(
		values: GenericValues,
		joinCharacter: string
	): string;
	export function render(
		...args:
		| [readonly (string | boolean | null | undefined)[], string]
		| [string]
	) {
		if (args.length === 1) {
			const [joinCharacter] = args;

			return (values: readonly (string | boolean | null | undefined)[]) => render(values, joinCharacter);
		}

		const [values, joinCharacter] = args;

		return values
			.flat(Infinity)
			.filter((value) => typeof value === "string" || value === true)
			.join(joinCharacter);
	}

	export const renderLine = render(" ");
	export const renderParagraph = render(back);
}
