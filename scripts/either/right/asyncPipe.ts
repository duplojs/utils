/* eslint-disable @typescript-eslint/max-params */
import { type Right } from "./create";
import { isLeft, type Left } from "../left";
import { success, type Success } from "./success";
import { isRight } from "./is";
import { type MaybePromise, unwrap, type Unwrap } from "@scripts/common";

type Either = Right | Left;

type RightAsyncPipeFunction<
	GenericInput extends unknown,
	GenericOutput extends unknown,
> = (
	input: Awaited<GenericInput> extends infer InferredInput
		? InferredInput extends Either
			? Unwrap<Exclude<InferredInput, Left>>
			: InferredInput
		: never
) => GenericOutput;

type RightAsyncPipeResult<
	GenericPipeOutputs extends unknown,
	GenericLastPipeOutput extends unknown,
> = (
	| Extract<
		Awaited<GenericPipeOutputs>,
		Left
	>
	| (
		Awaited<GenericLastPipeOutput> extends infer InferredLastResult
			? Exclude<
				InferredLastResult extends Either
					? InferredLastResult
					: Success<InferredLastResult>,
				Left
			>
			: never
	)
);

/**
 * {@include either/rightAsyncPipe/index.md}
 */
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1,
			GenericOutputPipe1
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2,
			GenericOutputPipe2
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3,
			GenericOutputPipe3
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4,
			GenericOutputPipe4
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5,
			GenericOutputPipe5
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6,
			GenericOutputPipe6
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6
			| GenericOutputPipe7,
			GenericOutputPipe7
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightAsyncPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6
			| GenericOutputPipe7
			| GenericOutputPipe8,
			GenericOutputPipe8
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightAsyncPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightAsyncPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6
			| GenericOutputPipe7
			| GenericOutputPipe8
			| GenericOutputPipe9,
			GenericOutputPipe9
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightAsyncPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightAsyncPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightAsyncPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6
			| GenericOutputPipe7
			| GenericOutputPipe8
			| GenericOutputPipe9
			| GenericOutputPipe10,
			GenericOutputPipe10
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightAsyncPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightAsyncPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightAsyncPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightAsyncPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6
			| GenericOutputPipe7
			| GenericOutputPipe8
			| GenericOutputPipe9
			| GenericOutputPipe10
			| GenericOutputPipe11,
			GenericOutputPipe11
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
	const GenericOutputPipe12 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightAsyncPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightAsyncPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightAsyncPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightAsyncPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
	pipe12: RightAsyncPipeFunction<GenericOutputPipe11, GenericOutputPipe12>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6
			| GenericOutputPipe7
			| GenericOutputPipe8
			| GenericOutputPipe9
			| GenericOutputPipe10
			| GenericOutputPipe11
			| GenericOutputPipe12,
			GenericOutputPipe12
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
	const GenericOutputPipe12 extends unknown,
	const GenericOutputPipe13 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightAsyncPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightAsyncPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightAsyncPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightAsyncPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
	pipe12: RightAsyncPipeFunction<GenericOutputPipe11, GenericOutputPipe12>,
	pipe13: RightAsyncPipeFunction<GenericOutputPipe12, GenericOutputPipe13>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6
			| GenericOutputPipe7
			| GenericOutputPipe8
			| GenericOutputPipe9
			| GenericOutputPipe10
			| GenericOutputPipe11
			| GenericOutputPipe12
			| GenericOutputPipe13,
			GenericOutputPipe13
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
	const GenericOutputPipe12 extends unknown,
	const GenericOutputPipe13 extends unknown,
	const GenericOutputPipe14 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightAsyncPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightAsyncPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightAsyncPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightAsyncPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
	pipe12: RightAsyncPipeFunction<GenericOutputPipe11, GenericOutputPipe12>,
	pipe13: RightAsyncPipeFunction<GenericOutputPipe12, GenericOutputPipe13>,
	pipe14: RightAsyncPipeFunction<GenericOutputPipe13, GenericOutputPipe14>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6
			| GenericOutputPipe7
			| GenericOutputPipe8
			| GenericOutputPipe9
			| GenericOutputPipe10
			| GenericOutputPipe11
			| GenericOutputPipe12
			| GenericOutputPipe13
			| GenericOutputPipe14,
			GenericOutputPipe14
		>,
		any
	>
>;
export function rightAsyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
	const GenericOutputPipe12 extends unknown,
	const GenericOutputPipe13 extends unknown,
	const GenericOutputPipe14 extends unknown,
	const GenericOutputPipe15 extends unknown,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightAsyncPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightAsyncPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightAsyncPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightAsyncPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
	pipe12: RightAsyncPipeFunction<GenericOutputPipe11, GenericOutputPipe12>,
	pipe13: RightAsyncPipeFunction<GenericOutputPipe12, GenericOutputPipe13>,
	pipe14: RightAsyncPipeFunction<GenericOutputPipe13, GenericOutputPipe14>,
	pipe15: RightAsyncPipeFunction<GenericOutputPipe14, GenericOutputPipe15>,
): Promise<
	Extract<
		RightAsyncPipeResult<
			| GenericInput
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4
			| GenericOutputPipe5
			| GenericOutputPipe6
			| GenericOutputPipe7
			| GenericOutputPipe8
			| GenericOutputPipe9
			| GenericOutputPipe10
			| GenericOutputPipe11
			| GenericOutputPipe12
			| GenericOutputPipe13
			| GenericOutputPipe14
			| GenericOutputPipe15,
			GenericOutputPipe15
		>,
		any
	>
>;
export async function rightAsyncPipe(
	input: MaybePromise<unknown>,
	...pipes: RightAsyncPipeFunction<unknown, unknown>[]
) {
	const awaitedInput = await input;

	if (isLeft(awaitedInput)) {
		return awaitedInput;
	}

	let acc: unknown = isRight(awaitedInput)
		? unwrap(awaitedInput)
		: awaitedInput;

	for (const pipe of pipes) {
		acc = await pipe(
			isRight(acc)
				? unwrap(acc)
				: acc,
		);

		if (isLeft(acc)) {
			return acc;
		}
	}

	return isRight(acc)
		? acc
		: success(acc);
}
