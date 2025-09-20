import { type AnyValue } from "@scripts/common";
import { type GeneratorLoopParams } from "./loop";

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

export async function *asyncLoop<
	GenericRawExitOutput extends AnyValue = undefined,
	GenericRawNextOutput extends AnyValue = undefined,
>(
	loop: (params: GeneratorLoopParams<GenericRawNextOutput>) => Promise<
		| LoopOutputNextResult<GenericRawNextOutput>
		| LoopOutputNextResult<undefined>
		| LoopOutputExistResult<GenericRawExitOutput>
		| LoopOutputExistResult<undefined>
	>,
): AsyncGenerator<
		Exclude<
			GenericRawExitOutput | GenericRawNextOutput,
			undefined
		>,
		unknown,
		unknown
	> {
	let previousOutput: any = undefined;

	for (let count = 0; true; count++) {
		const result = await loop({
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
