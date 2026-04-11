import { type TemplateLiteralContainLargeType, type StringLength } from "./types";

/**
 * {@include string/length/index.md}
 */
export function length<
	GenericInput extends string,
>(input: GenericInput): TemplateLiteralContainLargeType<GenericInput> extends true
	? number
	: StringLength<GenericInput> {
	return input.length as never;
}
