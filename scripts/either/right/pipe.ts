/* eslint-disable @typescript-eslint/max-params */

import { type EitherRight } from "./create";
import { isEitherLeft, type EitherLeft } from "../left";
import { createEitherSuccess, type EitherSuccess } from "./success";
import { isEitherRight } from "./is";
import { type AnyValue } from "@scripts/common/types/anyValue";

type Either = EitherRight | EitherLeft;

export type EitherRightPipeFunction<
	GenericInput extends Either = Either,
	GenericOutput extends Either = Either,
> = (
	input: Extract<GenericInput, EitherRight>["value"]
) => GenericOutput;

export type EitherRightPipeResult<
	GenericInput extends Either,
	GenericPipes extends Either,
	GenericLastPipe extends Either,
> =
	| Extract<
		| GenericInput
		| GenericPipes,
		EitherLeft
	>
	| Extract<
		GenericLastPipe,
		EitherRight
	>;

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: EitherSuccess<GenericValue>;

export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericOutputPipe1,
		GenericOutputPipe1
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
	GenericOutputPipe2 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
	pipe2: EitherRightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericOutputPipe1
		| GenericOutputPipe2,
		GenericOutputPipe2
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
	GenericOutputPipe2 extends Either,
	GenericOutputPipe3 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
	pipe2: EitherRightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: EitherRightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericOutputPipe1
		| GenericOutputPipe2
		| GenericOutputPipe3,
		GenericOutputPipe3
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
	GenericOutputPipe2 extends Either,
	GenericOutputPipe3 extends Either,
	GenericOutputPipe4 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
	pipe2: EitherRightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: EitherRightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: EitherRightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericOutputPipe1
		| GenericOutputPipe2
		| GenericOutputPipe3
		| GenericOutputPipe4,
		GenericOutputPipe4
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
	GenericOutputPipe2 extends Either,
	GenericOutputPipe3 extends Either,
	GenericOutputPipe4 extends Either,
	GenericOutputPipe5 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
	pipe2: EitherRightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: EitherRightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: EitherRightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: EitherRightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericOutputPipe1
		| GenericOutputPipe2
		| GenericOutputPipe3
		| GenericOutputPipe4
		| GenericOutputPipe5,
		GenericOutputPipe5
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
	GenericOutputPipe2 extends Either,
	GenericOutputPipe3 extends Either,
	GenericOutputPipe4 extends Either,
	GenericOutputPipe5 extends Either,
	GenericOutputPipe6 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
	pipe2: EitherRightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: EitherRightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: EitherRightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: EitherRightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: EitherRightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
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
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
	GenericOutputPipe2 extends Either,
	GenericOutputPipe3 extends Either,
	GenericOutputPipe4 extends Either,
	GenericOutputPipe5 extends Either,
	GenericOutputPipe6 extends Either,
	GenericOutputPipe7 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
	pipe2: EitherRightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: EitherRightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: EitherRightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: EitherRightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: EitherRightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: EitherRightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
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
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
	GenericOutputPipe2 extends Either,
	GenericOutputPipe3 extends Either,
	GenericOutputPipe4 extends Either,
	GenericOutputPipe5 extends Either,
	GenericOutputPipe6 extends Either,
	GenericOutputPipe7 extends Either,
	GenericOutputPipe8 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
	pipe2: EitherRightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: EitherRightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: EitherRightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: EitherRightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: EitherRightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: EitherRightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: EitherRightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
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
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
	GenericOutputPipe2 extends Either,
	GenericOutputPipe3 extends Either,
	GenericOutputPipe4 extends Either,
	GenericOutputPipe5 extends Either,
	GenericOutputPipe6 extends Either,
	GenericOutputPipe7 extends Either,
	GenericOutputPipe8 extends Either,
	GenericOutputPipe9 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
	pipe2: EitherRightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: EitherRightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: EitherRightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: EitherRightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: EitherRightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: EitherRightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: EitherRightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: EitherRightPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
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
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends Either,
	GenericOutputPipe2 extends Either,
	GenericOutputPipe3 extends Either,
	GenericOutputPipe4 extends Either,
	GenericOutputPipe5 extends Either,
	GenericOutputPipe6 extends Either,
	GenericOutputPipe7 extends Either,
	GenericOutputPipe8 extends Either,
	GenericOutputPipe9 extends Either,
	GenericOutputPipe10 extends Either,
>(
	input: GenericInput,
	pipe1: EitherRightPipeFunction<ToEither<GenericInput>, GenericOutputPipe1>,
	pipe2: EitherRightPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: EitherRightPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: EitherRightPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: EitherRightPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: EitherRightPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: EitherRightPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
	pipe8: EitherRightPipeFunction<GenericOutputPipe7, GenericOutputPipe8>,
	pipe9: EitherRightPipeFunction<GenericOutputPipe8, GenericOutputPipe9>,
	pipe10: EitherRightPipeFunction<GenericOutputPipe9, GenericOutputPipe10>,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
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
export function eitherRightPipe(
	input: AnyValue,
	...pipes: EitherRightPipeFunction[]
): any {
	let acc: Either = isEitherRight(input) || isEitherLeft(input)
		? input
		: createEitherSuccess(input);

	for (const pipe of pipes) {
		acc = pipe(acc.value);

		if (isEitherLeft(acc)) {
			return acc;
		}
	}

	return acc;
}
