/* eslint-disable @typescript-eslint/max-params */
import { type Right } from "./create";
import { isLeft, type Left } from "../left";
import { type MaybeFutureEither } from "../future/maybeFutureEither";
import { type FutureError, future, type Future } from "../future";
import { success, type Success } from "./success";
import { isRight } from "./is";
import { type AnyValue, unwrap, type Unwrap } from "@scripts/common";

type Either = Right | Left;

export type RightAsyncPipeFunction<
	GenericInput extends AnyValue = AnyValue,
	GenericOutput extends MaybeFutureEither<AnyValue> = MaybeFutureEither<AnyValue>,
> = (
	input: Awaited<GenericInput> extends infer InferredInput
		? InferredInput extends Either
			? Unwrap<Exclude<InferredInput, Left>>
			: InferredInput
		: never
) => GenericOutput;

/**
 * @deprecated use RightAsyncPipeFunction
 */
export type EitherRightAsyncPipeFunction<
	GenericInput extends AnyValue = AnyValue,
	GenericOutput extends MaybeFutureEither<AnyValue> = MaybeFutureEither<AnyValue>,
> = RightAsyncPipeFunction<GenericInput, GenericOutput>;

export type RightAsyncPipeResult<
	GenericPipeOutputs extends AnyValue,
	GenericLastPipeOutput extends AnyValue,
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
	| (
		Promise<any> extends Exclude<GenericPipeOutputs, Future<any>>
			? FutureError
			: never
	)
);

/**
 * @deprecated use RightAsyncPipeResult
 */
export type EitherRightAsyncPipeResult<
	GenericPipeOutputs extends AnyValue,
	GenericLastPipeOutput extends AnyValue,
> = RightAsyncPipeResult<GenericPipeOutputs, GenericLastPipeOutput>;

/**
 * {@include either/rightAsyncPipe/index.md}
 */
export function rightAsyncPipe<
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe7 extends MaybeFutureEither<AnyValue>,
>(
	input: GenericInput,
	pipe1: RightAsyncPipeFunction<GenericInput, GenericOutputPipe1>,
	pipe2: RightAsyncPipeFunction<GenericOutputPipe1, GenericOutputPipe2>,
	pipe3: RightAsyncPipeFunction<GenericOutputPipe2, GenericOutputPipe3>,
	pipe4: RightAsyncPipeFunction<GenericOutputPipe3, GenericOutputPipe4>,
	pipe5: RightAsyncPipeFunction<GenericOutputPipe4, GenericOutputPipe5>,
	pipe6: RightAsyncPipeFunction<GenericOutputPipe5, GenericOutputPipe6>,
	pipe7: RightAsyncPipeFunction<GenericOutputPipe6, GenericOutputPipe7>,
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe7 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe8 extends MaybeFutureEither<AnyValue>,
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
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe7 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe8 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe9 extends MaybeFutureEither<AnyValue>,
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
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe7 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe8 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe9 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe10 extends MaybeFutureEither<AnyValue>,
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
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe7 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe8 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe9 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe10 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe11 extends MaybeFutureEither<AnyValue>,
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
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe7 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe8 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe9 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe10 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe11 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe12 extends MaybeFutureEither<AnyValue>,
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
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe7 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe8 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe9 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe10 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe11 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe12 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe13 extends MaybeFutureEither<AnyValue>,
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
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe7 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe8 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe9 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe10 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe11 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe12 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe13 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe14 extends MaybeFutureEither<AnyValue>,
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
): Future<
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
	GenericInput extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe1 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe2 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe3 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe4 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe5 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe6 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe7 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe8 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe9 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe10 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe11 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe12 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe13 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe14 extends MaybeFutureEither<AnyValue>,
	GenericOutputPipe15 extends MaybeFutureEither<AnyValue>,
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
): Future<
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
export function rightAsyncPipe(
	input: MaybeFutureEither<AnyValue>,
	...pipes: RightAsyncPipeFunction[]
): Future<any> {
	return future(
		(async() => {
			const awaitedInput = await input;

			if (isLeft(awaitedInput)) {
				return awaitedInput;
			}

			let acc: AnyValue = isRight(awaitedInput)
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
		})(),
	);
}
