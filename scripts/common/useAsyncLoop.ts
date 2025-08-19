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

export interface LoopParams<
	GenericRawNextOutput extends any,
> {
	count: number;
	previousOutput: GenericRawNextOutput | undefined;
	next(output?: GenericRawNextOutput): LoopOutputNextResult<GenericRawNextOutput | undefined>;
	exit<
		GenericOutput extends any = undefined,
	>(output?: GenericOutput): LoopOutputExistResult<GenericOutput>;
}

export async function useAsyncLoop<
	GenericExitOutput extends LoopOutputExistResult<any> = LoopOutputExistResult<undefined>,
	GenericRawNextOutput extends any = undefined,
>(
	loop: (params: LoopParams<GenericRawNextOutput>) => Promise<
		| LoopOutputNextResult<GenericRawNextOutput>
		| GenericExitOutput
	>,
): Promise<GenericExitOutput["-exitData"]> {
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
