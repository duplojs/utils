import { type AnyValue } from "@scripts/common";
import { type GeneratorLoopParams } from "./loop";

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

export async function *asyncLoop<
	GenericRawExitOutput extends AnyValue = undefined,
	GenericRawNextOutput extends AnyValue = undefined,
>(
	loop: (params: GeneratorLoopParams<GenericRawNextOutput>) => Promise<
		| LoopOutputNextResult<GenericRawNextOutput>
		| LoopOutputExistResult<GenericRawExitOutput>
	>,
): AsyncGenerator<GenericRawExitOutput | GenericRawNextOutput, unknown, unknown> {
	let previousOutput: any = undefined;

	for (let count = 0; true; count++) {
		const result = await loop({
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
