import { type AnyValue } from "@scripts/common";

interface LoopOutputExistResult<
	GenericOutput extends any,
> {
	"-exitData": GenericOutput;
}

interface LoopOutputNextResult<
	GenericOutput extends any,
> {
	"-nextData": GenericOutput;
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
		| LoopOutputExistResult<GenericRawExitOutput>,
): Generator<GenericRawExitOutput | GenericRawNextOutput, unknown, unknown> {
	let previousOutput: any = undefined;

	for (let count = 0; true; count++) {
		const result = loop({
			previousOutput,
			count,
			next: (data) => ({ "-nextData": data as any }),
			exit: (data) => ({ "-exitData": data as any }),
		});

		if ("-exitData" in result) {
			yield result["-exitData"];
			break;
		}

		previousOutput = result["-nextData"];
		yield result["-nextData"];
	}

	return;
}
