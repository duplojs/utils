/* eslint-disable @typescript-eslint/max-params */
import { type EitherRight } from "./create";
import { isEitherLeft, type EitherLeft, unknownIsEitherLeft } from "../left";
import { type MaybeFutureEither } from "../future/MaybeFutureEither";
import { createFutureEither, type FutureEither } from "../future";
import { createEitherSuccess, type EitherSuccess } from "./success";
import { unknownIsEitherRight } from "./is";
import { type AnyValue } from "@scripts/common/types/AnyValue";

type Either = EitherRight | EitherLeft;

export type EitherRightAsyncPipeFunction<
	GenericInput extends MaybeFutureEither<Either> = MaybeFutureEither<Either>,
> = (
	input: Extract<GenericInput, EitherRight>["value"]
) => MaybeFutureEither<Either>;

export type EitherRightAsyncPipeResult<
	GenericInput extends MaybeFutureEither<Either>,
	GenericPipes extends EitherRightAsyncPipeFunction,
	GenericLastPipe extends EitherRightAsyncPipeFunction,
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

export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericPipe1,
			GenericPipe1
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
	GenericPipe2 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe1>>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericPipe1
			| GenericPipe2,
			GenericPipe2
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
	GenericPipe2 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe1>>>,
	GenericPipe3 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe2>>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericPipe1
			| GenericPipe2
			| GenericPipe3,
			GenericPipe3
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
	GenericPipe2 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe1>>>,
	GenericPipe3 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe2>>>,
	GenericPipe4 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe3>>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericPipe1
			| GenericPipe2
			| GenericPipe3
			| GenericPipe4,
			GenericPipe4
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
	GenericPipe2 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe1>>>,
	GenericPipe3 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe2>>>,
	GenericPipe4 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe3>>>,
	GenericPipe5 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe4>>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
	pipe5: GenericPipe5,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericPipe1
			| GenericPipe2
			| GenericPipe3
			| GenericPipe4
			| GenericPipe5,
			GenericPipe5
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
	GenericPipe2 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe1>>>,
	GenericPipe3 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe2>>>,
	GenericPipe4 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe3>>>,
	GenericPipe5 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe4>>>,
	GenericPipe6 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe5>>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
	pipe5: GenericPipe5,
	pipe6: GenericPipe6,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericPipe1
			| GenericPipe2
			| GenericPipe3
			| GenericPipe4
			| GenericPipe5
			| GenericPipe6,
			GenericPipe6
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
	GenericPipe2 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe1>>>,
	GenericPipe3 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe2>>>,
	GenericPipe4 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe3>>>,
	GenericPipe5 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe4>>>,
	GenericPipe6 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe5>>>,
	GenericPipe7 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe6>>>,
>(
	input: GenericInput,
	pipe1: GenericPipe1,
	pipe2: GenericPipe2,
	pipe3: GenericPipe3,
	pipe4: GenericPipe4,
	pipe5: GenericPipe5,
	pipe6: GenericPipe6,
	pipe7: GenericPipe7,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
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
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
	GenericPipe2 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe1>>>,
	GenericPipe3 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe2>>>,
	GenericPipe4 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe3>>>,
	GenericPipe5 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe4>>>,
	GenericPipe6 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe5>>>,
	GenericPipe7 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe6>>>,
	GenericPipe8 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe7>>>,
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
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
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
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
	GenericPipe2 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe1>>>,
	GenericPipe3 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe2>>>,
	GenericPipe4 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe3>>>,
	GenericPipe5 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe4>>>,
	GenericPipe6 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe5>>>,
	GenericPipe7 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe6>>>,
	GenericPipe8 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe7>>>,
	GenericPipe9 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe8>>>,
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
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
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
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericPipe1 extends EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>>,
	GenericPipe2 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe1>>>,
	GenericPipe3 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe2>>>,
	GenericPipe4 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe3>>>,
	GenericPipe5 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe4>>>,
	GenericPipe6 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe5>>>,
	GenericPipe7 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe6>>>,
	GenericPipe8 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe7>>>,
	GenericPipe9 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe8>>>,
	GenericPipe10 extends EitherRightAsyncPipeFunction<Awaited<ReturnType<GenericPipe9>>>,
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
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
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
	>
>;
export function eitherRightAsyncPipe(
	input: AnyValue,
	...pipes: EitherRightAsyncPipeFunction[]
): Promise<any> {
	return createFutureEither(
		(async() => {
			const awaitedInput = await input;

			let acc: Either = unknownIsEitherRight(awaitedInput) || unknownIsEitherLeft(awaitedInput)
				? awaitedInput
				: createEitherSuccess(awaitedInput);

			for (const pipe of pipes) {
				acc = await pipe(acc.value);

				if (isEitherLeft(acc)) {
					return acc;
				}
			}

			return acc;
		})(),
	);
}
