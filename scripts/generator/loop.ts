import { type AnyValue } from "@scripts/common";

interface LoopOutputExistResult<
	GenericOutput extends any,
> {
	"-exitData": GenericOutput | undefined;
}

interface LoopOutputNextResult<
	GenericOutput extends any,
> {
	"-nextData": GenericOutput | undefined;
}

export interface GeneratorLoopParams<
	GenericRawNextOutput extends any,
> {
	count: number;
	previousOutput: GenericRawNextOutput | undefined;
	next<
		GenericValue extends GenericRawNextOutput | undefined = undefined,
	>(output?: GenericValue): LoopOutputNextResult<GenericValue>;
	exit<
		GenericOutput extends AnyValue = undefined,
	>(output?: GenericOutput): LoopOutputExistResult<GenericOutput>;
}

export function *loop<
	GenericRawExitOutput extends AnyValue = undefined,
	GenericRawNextOutput extends AnyValue = undefined,
>(
	loop: (params: GeneratorLoopParams<GenericRawNextOutput>) =>
		| LoopOutputNextResult<GenericRawNextOutput>
		| LoopOutputNextResult<undefined>
		| LoopOutputExistResult<GenericRawExitOutput>
		| LoopOutputExistResult<undefined>,
): Generator<
		Exclude<
			GenericRawExitOutput | GenericRawNextOutput,
			undefined
		>,
		unknown,
		unknown
	> {
	let previousOutput: any = undefined;

	for (let count = 0; true; count++) {
		const result = loop({
			previousOutput,
			count,
			next: (data) => ({ "-nextData": data as any }),
			exit: (data) => ({ "-exitData": data as any }),
		});

		if ("-exitData" in result) {
			if (result["-exitData"] !== undefined) {
				yield result["-exitData"] as never;
			}
			break;
		}

		previousOutput = result["-nextData"];

		if (previousOutput !== undefined) {
			yield previousOutput;
		}
	}

	return;
}
