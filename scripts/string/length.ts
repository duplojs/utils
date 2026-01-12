import { type StringLength } from "./types/stringLength";

/**
 * {@include string/length/index.md}
 */
export function length<
	GenericInput extends string,
>(input: GenericInput): StringLength<GenericInput> {
	return input.length;
}
