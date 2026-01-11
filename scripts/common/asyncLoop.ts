import { type LoopParams } from "./loop";
import { type AnyValue } from "./types/anyValue";

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

/**
 * {@include common/asyncLoop/index.md}
 */
export async function asyncLoop<
	GenericRawExitOutput extends AnyValue = undefined,
	GenericRawNextOutput extends AnyValue = undefined,
>(
	loop: (params: LoopParams<GenericRawNextOutput>) => Promise<
		| LoopOutputNextResult<GenericRawNextOutput | undefined>
		| LoopOutputExistResult<GenericRawExitOutput>
	>,
): Promise<GenericRawExitOutput> {
	let previousOutput: any = undefined;

	for (let count = 0; true; count++) {
		const result = await loop({
			previousOutput,
			count,
			next: (data) => ({ "-nextData": data as any }),
			exit: (data) => ({ "-exitData": data as any }),
		});

		if ("-exitData" in result) {
			return result["-exitData"];
		}

		previousOutput = result["-nextData"];
	}
}
