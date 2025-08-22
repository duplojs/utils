/* eslint-disable @typescript-eslint/max-params */
import { type EitherRight } from "./create";
import { isEitherLeft, type EitherLeft, unknownIsEitherLeft } from "../left";
import { type MaybeFutureEither } from "../future/MaybeFutureEither";
import { createFutureEither, type FutureEither } from "../future";
import { createEitherSuccess, type EitherSuccess } from "./success";
import { unknownIsEitherRight } from "./is";
import { type AnyValue } from "@scripts/common/types/anyValue";

type Either = EitherRight | EitherLeft;

type EitherOrFutureEither = Either | FutureEither<any>;

export type EitherRightAsyncPipeFunction<
	GenericInput extends Either = Either,
	GenericOutput extends EitherOrFutureEither = EitherOrFutureEither,
> = (
	input: Extract<GenericInput, EitherRight>["value"]
) => GenericOutput;

export type EitherRightAsyncPipeResult<
	GenericInput extends EitherOrFutureEither,
	GenericOutputPipes extends EitherOrFutureEither,
	GenericLastPipe extends EitherOrFutureEither,
> =
	| Extract<
		| GenericInput
		| GenericOutputPipes,
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

export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericOutputPipe1,
			GenericOutputPipe1
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericOutputPipe1
			| GenericOutputPipe2,
			GenericOutputPipe2
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
	GenericOutputPipe3 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
	pipe3: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe2>, GenericOutputPipe3>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3,
			GenericOutputPipe3
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
	GenericOutputPipe3 extends EitherOrFutureEither,
	GenericOutputPipe4 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
	pipe3: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe2>, GenericOutputPipe3>,
	pipe4: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe3>, GenericOutputPipe4>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericOutputPipe1
			| GenericOutputPipe2
			| GenericOutputPipe3
			| GenericOutputPipe4,
			GenericOutputPipe4
		>,
		any
	>
>;
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
	GenericOutputPipe3 extends EitherOrFutureEither,
	GenericOutputPipe4 extends EitherOrFutureEither,
	GenericOutputPipe5 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
	pipe3: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe2>, GenericOutputPipe3>,
	pipe4: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe3>, GenericOutputPipe4>,
	pipe5: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe4>, GenericOutputPipe5>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
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
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
	GenericOutputPipe3 extends EitherOrFutureEither,
	GenericOutputPipe4 extends EitherOrFutureEither,
	GenericOutputPipe5 extends EitherOrFutureEither,
	GenericOutputPipe6 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
	pipe3: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe2>, GenericOutputPipe3>,
	pipe4: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe3>, GenericOutputPipe4>,
	pipe5: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe4>, GenericOutputPipe5>,
	pipe6: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe5>, GenericOutputPipe6>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			GenericOutputPipe1
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
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
	GenericOutputPipe3 extends EitherOrFutureEither,
	GenericOutputPipe4 extends EitherOrFutureEither,
	GenericOutputPipe5 extends EitherOrFutureEither,
	GenericOutputPipe6 extends EitherOrFutureEither,
	GenericOutputPipe7 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
	pipe3: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe2>, GenericOutputPipe3>,
	pipe4: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe3>, GenericOutputPipe4>,
	pipe5: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe4>, GenericOutputPipe5>,
	pipe6: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe5>, GenericOutputPipe6>,
	pipe7: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe6>, GenericOutputPipe7>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
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
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
	GenericOutputPipe3 extends EitherOrFutureEither,
	GenericOutputPipe4 extends EitherOrFutureEither,
	GenericOutputPipe5 extends EitherOrFutureEither,
	GenericOutputPipe6 extends EitherOrFutureEither,
	GenericOutputPipe7 extends EitherOrFutureEither,
	GenericOutputPipe8 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
	pipe3: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe2>, GenericOutputPipe3>,
	pipe4: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe3>, GenericOutputPipe4>,
	pipe5: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe4>, GenericOutputPipe5>,
	pipe6: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe5>, GenericOutputPipe6>,
	pipe7: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe6>, GenericOutputPipe7>,
	pipe8: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe7>, GenericOutputPipe8>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
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
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
	GenericOutputPipe3 extends EitherOrFutureEither,
	GenericOutputPipe4 extends EitherOrFutureEither,
	GenericOutputPipe5 extends EitherOrFutureEither,
	GenericOutputPipe6 extends EitherOrFutureEither,
	GenericOutputPipe7 extends EitherOrFutureEither,
	GenericOutputPipe8 extends EitherOrFutureEither,
	GenericOutputPipe9 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
	pipe3: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe2>, GenericOutputPipe3>,
	pipe4: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe3>, GenericOutputPipe4>,
	pipe5: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe4>, GenericOutputPipe5>,
	pipe6: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe5>, GenericOutputPipe6>,
	pipe7: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe6>, GenericOutputPipe7>,
	pipe8: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe7>, GenericOutputPipe8>,
	pipe9: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe8>, GenericOutputPipe9>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
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
export function eitherRightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
	GenericOutputPipe3 extends EitherOrFutureEither,
	GenericOutputPipe4 extends EitherOrFutureEither,
	GenericOutputPipe5 extends EitherOrFutureEither,
	GenericOutputPipe6 extends EitherOrFutureEither,
	GenericOutputPipe7 extends EitherOrFutureEither,
	GenericOutputPipe8 extends EitherOrFutureEither,
	GenericOutputPipe9 extends EitherOrFutureEither,
	GenericOutputPipe10 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
	pipe3: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe2>, GenericOutputPipe3>,
	pipe4: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe3>, GenericOutputPipe4>,
	pipe5: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe4>, GenericOutputPipe5>,
	pipe6: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe5>, GenericOutputPipe6>,
	pipe7: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe6>, GenericOutputPipe7>,
	pipe8: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe7>, GenericOutputPipe8>,
	pipe9: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe8>, GenericOutputPipe9>,
	pipe10: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe9>, GenericOutputPipe10>,
): FutureEither<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
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
export function eitherRightAsyncPipe(
	input: AnyValue,
	...pipes: EitherRightAsyncPipeFunction[]
): Promise<any> {
	return createFutureEither(
		(async() => {
			const awaitedInput = await input;

			if (unknownIsEitherLeft(awaitedInput)) {
				return awaitedInput;
			}

			let acc: Either = unknownIsEitherRight(awaitedInput)
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
