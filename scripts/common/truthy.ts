import { type FalsyValue } from "./types";

export type TruthyValue<
	GenericInput extends unknown,
> = Exclude<GenericInput, FalsyValue>;

/**
 * {@include common/truthy/index.md}
 */
export function truthy<
	GenericInput extends unknown,
>(input: GenericInput): input is TruthyValue<GenericInput> {
	return !!input;
}
