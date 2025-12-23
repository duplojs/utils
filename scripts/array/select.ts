import { type AnyValue } from "@scripts/common";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface ArraySelectSelect<
	GenericOutput extends unknown = unknown,
> {
	"-select": GenericOutput;
}

export interface ArraySelectSkip {
	"-skip": null;
}

interface ArraySelectParams<
	GenericInputArray extends readonly unknown[],
> {
	element: GenericInputArray[number];
	index: number;
	self: GenericInputArray;
	skip(): ArraySelectSkip;
	select<
		GenericOutput extends AnyValue = AnyValue,
	>(output: GenericOutput): ArraySelectSelect<
		GenericOutput
	>;
}

export const selectTools: Pick<
	ArraySelectParams<any>,
	"skip" | "select"
> = {
	skip() {
		return { "-skip": null };
	},
	select(output: any) {
		return { "-select": output };
	},
};

export function select<
	GenericInput extends readonly unknown[],
	GenericSelect extends ArraySelectSelect,
>(
	theFunction: (
		params: ArraySelectParams<GenericInput>
	) => GenericSelect | ArraySelectSkip,
): (input: GenericInput) => GenericSelect["-select"][];

export function select<
	GenericInput extends readonly unknown[],
	GenericSelect extends ArraySelectSelect,
>(
	input: GenericInput,
	theFunction: (
		params: ArraySelectParams<GenericInput>
	) => GenericSelect | ArraySelectSkip,
): GenericSelect["-select"][];

export function select(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (input: unknown[]) => select(input, theFunction);
	}
	const [input, theFunction] = args;

	const outputArray: unknown[] = [];

	for (let index = 0; index < input.length; index++) {
		const element = input[index]!;

		const result = theFunction({
			element,
			index,
			self: input,
			...selectTools,
		}) as ArraySelectSelect | ArraySelectSkip;

		if ("-skip" in result) {
			continue;
		}

		outputArray.push(result["-select"]);
	}

	return outputArray;
}
