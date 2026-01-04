import { type MaybePromise } from "@scripts/common";
import { type LoopOutputExistResult, type LoopOutputNextResult, type GeneratorLoopParams } from "./loop";

/**
 * {@include generator/asyncLoop/index.md}
 */
export async function *asyncLoop<
	GenericRawNextOutput extends unknown,
	GenericOutput extends MaybePromise<
		| LoopOutputNextResult<GenericRawNextOutput>
		| LoopOutputExistResult<unknown>
		| LoopOutputNextResult<undefined>
		| LoopOutputExistResult<undefined>
	>,
>(
	loop: (params: GeneratorLoopParams<GenericRawNextOutput>) => GenericOutput,
): AsyncGenerator<
		Exclude<
			Awaited<GenericOutput> extends infer InferredOutput
				? InferredOutput extends LoopOutputNextResult
					? InferredOutput["-nextData"]
					: InferredOutput extends LoopOutputExistResult
						? InferredOutput["-exitData"]
						: never
				: never,
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
