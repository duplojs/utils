/* eslint-disable @typescript-eslint/max-params */

import { type Right } from "./create";
import { isLeft, type Left } from "../left";
import { success, type Success } from "./success";
import { isRight } from "./is";
import { type AnyValue, unwrap, type Unwrap } from "@scripts/common";

type Either = Right | Left;

export type RightPipeFunction<
	GenericInput extends AnyValue = AnyValue,
	GenericOutput extends AnyValue = AnyValue,
> = (
	input: GenericInput extends Either
		? Unwrap<Exclude<GenericInput, Left>>
		: GenericInput
) => GenericOutput;

/**
 * @deprecated use RightPipeFunction
 */
export type EitherRightPipeFunction<
	GenericInput extends AnyValue = AnyValue,
	GenericOutput extends AnyValue = AnyValue,
> = RightPipeFunction<GenericInput, GenericOutput>;

export type RightPipeResult<
	GenericPipeOutputs extends AnyValue,
	GenericLastPipeOutput extends AnyValue,
> =
	| Extract<
		GenericPipeOutputs,
		Left
	>
	| Exclude<
		GenericLastPipeOutput extends Either
			? GenericLastPipeOutput
			: Success<GenericLastPipeOutput>,
		Left
	>;

/**
 * @deprecated use RightPipeResult
 */
export type EitherRightPipeResult<
	GenericPipeOutputs extends AnyValue,
	GenericLastPipeOutput extends AnyValue,
> = RightPipeResult<GenericPipeOutputs, GenericLastPipeOutput>;

/**
 * {@include either/rightPipe/index.md}
 */
export function rightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
	GenericOutputPipe9 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
	GenericOutputPipe9 extends AnyValue,
	GenericOutputPipe10 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
	GenericOutputPipe9 extends AnyValue,
	GenericOutputPipe10 extends AnyValue,
	GenericOutputPipe11 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
	GenericOutputPipe9 extends AnyValue,
	GenericOutputPipe10 extends AnyValue,
	GenericOutputPipe11 extends AnyValue,
	GenericOutputPipe12 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
	GenericOutputPipe9 extends AnyValue,
	GenericOutputPipe10 extends AnyValue,
	GenericOutputPipe11 extends AnyValue,
	GenericOutputPipe12 extends AnyValue,
	GenericOutputPipe13 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
	GenericOutputPipe9 extends AnyValue,
	GenericOutputPipe10 extends AnyValue,
	GenericOutputPipe11 extends AnyValue,
	GenericOutputPipe12 extends AnyValue,
	GenericOutputPipe13 extends AnyValue,
	GenericOutputPipe14 extends AnyValue,
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
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
	GenericOutputPipe9 extends AnyValue,
	GenericOutputPipe10 extends AnyValue,
	GenericOutputPipe11 extends AnyValue,
	GenericOutputPipe12 extends AnyValue,
	GenericOutputPipe13 extends AnyValue,
	GenericOutputPipe14 extends AnyValue,
	GenericOutputPipe15 extends AnyValue,
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
	input: AnyValue,
	...pipes: RightPipeFunction[]
): any {
	if (isLeft(input)) {
		return input;
	}

	let acc: AnyValue = isRight(input)
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
