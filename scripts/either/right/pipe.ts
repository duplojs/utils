/* eslint-disable @typescript-eslint/max-params */

import { type Right } from "./create";
import { isLeft, type Left } from "../left";
import { success, type Success } from "./success";
import { isRight } from "./is";
import { unwrap, type Unwrap } from "@scripts/common";

type Either = Right | Left;

type RightPipeFunction<
	GenericInput extends unknown,
	GenericOutput extends unknown,
> = (
	input: GenericInput extends Either
		? Unwrap<Exclude<GenericInput, Left>>
		: GenericInput
) => GenericOutput;

type RightPipeResult<
	GenericPipeOutputs extends unknown,
	GenericLastPipeOutput extends unknown,
> = (
	| Extract<
		GenericPipeOutputs,
		Left
	>
	| Exclude<
		GenericLastPipeOutput extends Either
			? GenericLastPipeOutput
			: Success<GenericLastPipeOutput>,
		Left
	>
);

/**
 * {@include either/rightPipe/index.md}
 */
export function rightPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
>(
	input: GenericInput,
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
): Extract<
	RightPipeResult<
		| GenericInput
		| GenericOutputPipe1,
		GenericOutputPipe1
	>,
	any
>;
export function rightPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
>(
	input: GenericInput,
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
): Extract<
	RightPipeResult<
		| GenericInput
		| GenericOutputPipe1
		| GenericOutputPipe2,
		GenericOutputPipe2
	>,
	any
>;
export function rightPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
>(
	input: GenericInput,
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
): Extract<
	RightPipeResult<
		| GenericInput
		| GenericOutputPipe1
		| GenericOutputPipe2
		| GenericOutputPipe3,
		GenericOutputPipe3
	>,
	any
>;
export function rightPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
>(
	input: GenericInput,
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
): Extract<
	RightPipeResult<
		| GenericInput
		| GenericOutputPipe1
		| GenericOutputPipe2
		| GenericOutputPipe3
		| GenericOutputPipe4,
		GenericOutputPipe4
	>,
	any
>;
export function rightPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
>(
	input: GenericInput,
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
): Extract<
	RightPipeResult<
		| GenericInput
		| GenericOutputPipe1
		| GenericOutputPipe2
		| GenericOutputPipe3
		| GenericOutputPipe4
		| GenericOutputPipe5,
		GenericOutputPipe5
	>,
	any
>;
export function rightPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
>(
	input: GenericInput,
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
): Extract<
	RightPipeResult<
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
>;
export function rightPipe<
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
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
): Extract<
	RightPipeResult<
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
>;
export function rightPipe<
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
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
): Extract<
	RightPipeResult<
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
>;
export function rightPipe<
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
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
): Extract<
	RightPipeResult<
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
>;
export function rightPipe<
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
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
): Extract<
	RightPipeResult<
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
>;
export function rightPipe<
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
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
): Extract<
	RightPipeResult<
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
>;
export function rightPipe<
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
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
	pipe12: RightPipeFunction<GenericOutputPipe11, GenericOutputPipe12>,
): Extract<
	RightPipeResult<
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
>;
export function rightPipe<
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
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
	pipe12: RightPipeFunction<GenericOutputPipe11, GenericOutputPipe12>,
	pipe13: RightPipeFunction<GenericOutputPipe12, GenericOutputPipe13>,
): Extract<
	RightPipeResult<
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
>;
export function rightPipe<
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
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
	pipe12: RightPipeFunction<GenericOutputPipe11, GenericOutputPipe12>,
	pipe13: RightPipeFunction<GenericOutputPipe12, GenericOutputPipe13>,
	pipe14: RightPipeFunction<GenericOutputPipe13, GenericOutputPipe14>,
): Extract<
	RightPipeResult<
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
>;
export function rightPipe<
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
	pipe1: RightPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: RightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: RightPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: RightPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
	pipe11: RightPipeFunction<GenericOutputPipe10, GenericOutputPipe11>,
	pipe12: RightPipeFunction<GenericOutputPipe11, GenericOutputPipe12>,
	pipe13: RightPipeFunction<GenericOutputPipe12, GenericOutputPipe13>,
	pipe14: RightPipeFunction<GenericOutputPipe13, GenericOutputPipe14>,
	pipe15: RightPipeFunction<GenericOutputPipe14, GenericOutputPipe15>,
): Extract<
	RightPipeResult<
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
>;

export function rightPipe(
	input: unknown,
	...pipes: RightPipeFunction<unknown, unknown>[]
): any {
	if (isLeft(input)) {
		return input;
	}

	let acc: unknown = isRight(input)
		? unwrap(input)
		: input;

	for (const pipe of pipes) {
		acc = pipe(
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
