import { type StringLength } from "./types/stringLength";

export function length<
	GenericInput extends string,
>(input: GenericInput): StringLength<GenericInput> {
	return input.length;
}
