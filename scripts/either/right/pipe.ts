/* eslint-disable @typescript-eslint/max-params */
import { type EitherRight } from "./create";
import { isEitherLeft, type EitherLeft, unknownIsEitherLeft } from "../left";
import { createEitherSuccess, type EitherSuccess } from "./success";
import { unknownIsEitherRight } from "./is";
import { type AnyValue } from "@scripts/common/types/AnyValue";

type Either = EitherRight | EitherLeft;

export type EitherRightPipeFunction<
	GenericInput extends Either = Either,
> = (
	input: Extract<GenericInput, EitherRight>["value"]
) => Either;

export type EitherRightPipeResult<
	GenericInput extends Either,
	GenericPipes extends EitherRightPipeFunction,
	GenericLastPipe extends EitherRightPipeFunction,
> =
	| Extract<
		| GenericInput
		| ReturnType<GenericPipes>,
		EitherLeft
	>
	| Extract<
		ReturnType<GenericLastPipe>,
		EitherRight
	>;

type ToEither<
	GenericValue extends unknown,
> = GenericValue extends Either
	? GenericValue
	: EitherSuccess<GenericValue>;

export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1,
		GenericPipe1
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
	GenericPipe2 extends EitherRightPipeFunction<ReturnType<GenericPipe1>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1
		| GenericPipe2,
		GenericPipe2
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
	GenericPipe2 extends EitherRightPipeFunction<ReturnType<GenericPipe1>>,
	GenericPipe3 extends EitherRightPipeFunction<ReturnType<GenericPipe2>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1
		| GenericPipe2
		| GenericPipe3,
		GenericPipe3
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
	GenericPipe2 extends EitherRightPipeFunction<ReturnType<GenericPipe1>>,
	GenericPipe3 extends EitherRightPipeFunction<ReturnType<GenericPipe2>>,
	GenericPipe4 extends EitherRightPipeFunction<ReturnType<GenericPipe3>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1
		| GenericPipe2
		| GenericPipe3
		| GenericPipe4,
		GenericPipe4
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
	GenericPipe2 extends EitherRightPipeFunction<ReturnType<GenericPipe1>>,
	GenericPipe3 extends EitherRightPipeFunction<ReturnType<GenericPipe2>>,
	GenericPipe4 extends EitherRightPipeFunction<ReturnType<GenericPipe3>>,
	GenericPipe5 extends EitherRightPipeFunction<ReturnType<GenericPipe4>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
	pipe5: GenericPipe5,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1
		| GenericPipe2
		| GenericPipe3
		| GenericPipe4
		| GenericPipe5,
		GenericPipe5
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
	GenericPipe2 extends EitherRightPipeFunction<ReturnType<GenericPipe1>>,
	GenericPipe3 extends EitherRightPipeFunction<ReturnType<GenericPipe2>>,
	GenericPipe4 extends EitherRightPipeFunction<ReturnType<GenericPipe3>>,
	GenericPipe5 extends EitherRightPipeFunction<ReturnType<GenericPipe4>>,
	GenericPipe6 extends EitherRightPipeFunction<ReturnType<GenericPipe5>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
	pipe5: GenericPipe5,
	pipe6: GenericPipe6,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1
		| GenericPipe2
		| GenericPipe3
		| GenericPipe4
		| GenericPipe5
		| GenericPipe6,
		GenericPipe6
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
	GenericPipe2 extends EitherRightPipeFunction<ReturnType<GenericPipe1>>,
	GenericPipe3 extends EitherRightPipeFunction<ReturnType<GenericPipe2>>,
	GenericPipe4 extends EitherRightPipeFunction<ReturnType<GenericPipe3>>,
	GenericPipe5 extends EitherRightPipeFunction<ReturnType<GenericPipe4>>,
	GenericPipe6 extends EitherRightPipeFunction<ReturnType<GenericPipe5>>,
	GenericPipe7 extends EitherRightPipeFunction<ReturnType<GenericPipe6>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
	pipe5: GenericPipe5,
	pipe6: GenericPipe6,
	pipe7: GenericPipe7,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1
		| GenericPipe2
		| GenericPipe3
		| GenericPipe4
		| GenericPipe5
		| GenericPipe6
		| GenericPipe7,
		GenericPipe7
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
	GenericPipe2 extends EitherRightPipeFunction<ReturnType<GenericPipe1>>,
	GenericPipe3 extends EitherRightPipeFunction<ReturnType<GenericPipe2>>,
	GenericPipe4 extends EitherRightPipeFunction<ReturnType<GenericPipe3>>,
	GenericPipe5 extends EitherRightPipeFunction<ReturnType<GenericPipe4>>,
	GenericPipe6 extends EitherRightPipeFunction<ReturnType<GenericPipe5>>,
	GenericPipe7 extends EitherRightPipeFunction<ReturnType<GenericPipe6>>,
	GenericPipe8 extends EitherRightPipeFunction<ReturnType<GenericPipe7>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
	pipe5: GenericPipe5,
	pipe6: GenericPipe6,
	pipe7: GenericPipe7,
	pipe8: GenericPipe8,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1
		| GenericPipe2
		| GenericPipe3
		| GenericPipe4
		| GenericPipe5
		| GenericPipe6
		| GenericPipe7
		| GenericPipe8,
		GenericPipe8
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
	GenericPipe2 extends EitherRightPipeFunction<ReturnType<GenericPipe1>>,
	GenericPipe3 extends EitherRightPipeFunction<ReturnType<GenericPipe2>>,
	GenericPipe4 extends EitherRightPipeFunction<ReturnType<GenericPipe3>>,
	GenericPipe5 extends EitherRightPipeFunction<ReturnType<GenericPipe4>>,
	GenericPipe6 extends EitherRightPipeFunction<ReturnType<GenericPipe5>>,
	GenericPipe7 extends EitherRightPipeFunction<ReturnType<GenericPipe6>>,
	GenericPipe8 extends EitherRightPipeFunction<ReturnType<GenericPipe7>>,
	GenericPipe9 extends EitherRightPipeFunction<ReturnType<GenericPipe8>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
	pipe5: GenericPipe5,
	pipe6: GenericPipe6,
	pipe7: GenericPipe7,
	pipe8: GenericPipe8,
	pipe9: GenericPipe9,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1
		| GenericPipe2
		| GenericPipe3
		| GenericPipe4
		| GenericPipe5
		| GenericPipe6
		| GenericPipe7
		| GenericPipe8
		| GenericPipe9,
		GenericPipe9
	>,
	any
>;
export function eitherRightPipe<
	GenericInput extends AnyValue,
	GenericPipe1 extends EitherRightPipeFunction<ToEither<GenericInput>>,
	GenericPipe2 extends EitherRightPipeFunction<ReturnType<GenericPipe1>>,
	GenericPipe3 extends EitherRightPipeFunction<ReturnType<GenericPipe2>>,
	GenericPipe4 extends EitherRightPipeFunction<ReturnType<GenericPipe3>>,
	GenericPipe5 extends EitherRightPipeFunction<ReturnType<GenericPipe4>>,
	GenericPipe6 extends EitherRightPipeFunction<ReturnType<GenericPipe5>>,
	GenericPipe7 extends EitherRightPipeFunction<ReturnType<GenericPipe6>>,
	GenericPipe8 extends EitherRightPipeFunction<ReturnType<GenericPipe7>>,
	GenericPipe9 extends EitherRightPipeFunction<ReturnType<GenericPipe8>>,
	GenericPipe10 extends EitherRightPipeFunction<ReturnType<GenericPipe9>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
	pipe5: GenericPipe5,
	pipe6: GenericPipe6,
	pipe7: GenericPipe7,
	pipe8: GenericPipe8,
	pipe9: GenericPipe9,
	pipe10: GenericPipe10,
): Extract<
	EitherRightPipeResult<
		ToEither<GenericInput>,
		| GenericPipe1
		| GenericPipe2
		| GenericPipe3
		| GenericPipe4
		| GenericPipe5
		| GenericPipe6
		| GenericPipe7
		| GenericPipe8
		| GenericPipe9
		| GenericPipe10,
		GenericPipe10
	>,
	any
>;
export function eitherRightPipe(
	input: AnyValue,
	...pipes: EitherRightPipeFunction[]
): any {
	let acc: Either = unknownIsEitherRight(input) || unknownIsEitherLeft(input)
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
