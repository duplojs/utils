/* eslint-disable @typescript-eslint/max-params */
import { type EitherRight } from "./create";
import { isLeft, type EitherLeft } from "../left";
import { type MaybeFutureEither } from "../future/MaybeFutureEither";
import { future, type Future } from "../future";
import { success, type EitherSuccess } from "./success";
import { isRight } from "./is";
import { type AnyValue } from "@scripts/common";

type Either = EitherRight | EitherLeft;

type EitherOrFutureEither = Either | Future<any>;

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

export function rightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
): Future<
	Extract<
		EitherRightAsyncPipeResult<
			ToEither<Awaited<GenericInput>>,
			| GenericOutputPipe1,
			GenericOutputPipe1
		>,
		any
	>
>;
export function rightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
): Future<
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
export function rightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends EitherOrFutureEither,
	GenericOutputPipe2 extends EitherOrFutureEither,
	GenericOutputPipe3 extends EitherOrFutureEither,
>(
	input: GenericInput,
	pipe1: EitherRightAsyncPipeFunction<ToEither<Awaited<GenericInput>>, GenericOutputPipe1>,
	pipe2: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe1>, GenericOutputPipe2>,
	pipe3: EitherRightAsyncPipeFunction<Awaited<GenericOutputPipe2>, GenericOutputPipe3>,
): Future<
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
export function rightAsyncPipe<
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
): Future<
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
export function rightAsyncPipe<
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
): Future<
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
export function rightAsyncPipe<
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
): Future<
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
export function rightAsyncPipe<
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
): Future<
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
export function rightAsyncPipe<
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
): Future<
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
export function rightAsyncPipe<
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
): Future<
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
export function rightAsyncPipe<
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
): Future<
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
export function rightAsyncPipe(
	input: AnyValue,
	...pipes: EitherRightAsyncPipeFunction[]
): Future<any> {
	return future(
		(async() => {
			const awaitedInput = await input;

			if (isLeft(awaitedInput)) {
				return awaitedInput;
			}

			let acc: Either = isRight(awaitedInput)
				? awaitedInput
				: success(awaitedInput);

			for (const pipe of pipes) {
				acc = await pipe(acc.value);

				if (isLeft(acc)) {
					return acc;
				}
			}

			return acc;
		})(),
	);
}
