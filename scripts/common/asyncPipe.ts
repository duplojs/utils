/* eslint-disable @typescript-eslint/max-params */
import { type MaybeFutureEither } from "@scripts/either/future/MaybeFutureEither";
import { type BreakGenericLink, type EscapeVoid } from "./types";
import { type AnyFunction } from "./types/anyFunction";
import { type AnyValue } from "./types/anyValue";
import { type MaybePromise } from "./types/maybePromise";

type MaybePromiseLike<GenericValue extends unknown> = MaybePromise<GenericValue> | MaybeFutureEither<GenericValue>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
): Promise<
	Awaited<GenericOutputPipe1>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
	pipe2: (input: Awaited<BreakGenericLink<GenericOutputPipe1>>) => GenericOutputPipe2,
): Promise<
	Awaited<GenericOutputPipe2>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
	pipe2: (input: Awaited<BreakGenericLink<GenericOutputPipe1>>) => GenericOutputPipe2,
	pipe3: (input: Awaited<BreakGenericLink<GenericOutputPipe2>>) => GenericOutputPipe3,
): Promise<
	Awaited<GenericOutputPipe3>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe4 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
	pipe2: (input: Awaited<BreakGenericLink<GenericOutputPipe1>>) => GenericOutputPipe2,
	pipe3: (input: Awaited<BreakGenericLink<GenericOutputPipe2>>) => GenericOutputPipe3,
	pipe4: (input: Awaited<BreakGenericLink<GenericOutputPipe3>>) => GenericOutputPipe4,
): Promise<
	Awaited<GenericOutputPipe4>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe4 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe5 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
	pipe2: (input: Awaited<BreakGenericLink<GenericOutputPipe1>>) => GenericOutputPipe2,
	pipe3: (input: Awaited<BreakGenericLink<GenericOutputPipe2>>) => GenericOutputPipe3,
	pipe4: (input: Awaited<BreakGenericLink<GenericOutputPipe3>>) => GenericOutputPipe4,
	pipe5: (input: Awaited<BreakGenericLink<GenericOutputPipe4>>) => GenericOutputPipe5,
): Promise<
	Awaited<GenericOutputPipe5>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe4 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe5 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe6 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
	pipe2: (input: Awaited<BreakGenericLink<GenericOutputPipe1>>) => GenericOutputPipe2,
	pipe3: (input: Awaited<BreakGenericLink<GenericOutputPipe2>>) => GenericOutputPipe3,
	pipe4: (input: Awaited<BreakGenericLink<GenericOutputPipe3>>) => GenericOutputPipe4,
	pipe5: (input: Awaited<BreakGenericLink<GenericOutputPipe4>>) => GenericOutputPipe5,
	pipe6: (input: Awaited<BreakGenericLink<GenericOutputPipe5>>) => GenericOutputPipe6,
): Promise<
	Awaited<GenericOutputPipe6>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe4 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe5 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe6 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe7 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
	pipe2: (input: Awaited<BreakGenericLink<GenericOutputPipe1>>) => GenericOutputPipe2,
	pipe3: (input: Awaited<BreakGenericLink<GenericOutputPipe2>>) => GenericOutputPipe3,
	pipe4: (input: Awaited<BreakGenericLink<GenericOutputPipe3>>) => GenericOutputPipe4,
	pipe5: (input: Awaited<BreakGenericLink<GenericOutputPipe4>>) => GenericOutputPipe5,
	pipe6: (input: Awaited<BreakGenericLink<GenericOutputPipe5>>) => GenericOutputPipe6,
	pipe7: (input: Awaited<BreakGenericLink<GenericOutputPipe6>>) => GenericOutputPipe7,
): Promise<
	Awaited<GenericOutputPipe7>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe4 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe5 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe6 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe7 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe8 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
	pipe2: (input: Awaited<BreakGenericLink<GenericOutputPipe1>>) => GenericOutputPipe2,
	pipe3: (input: Awaited<BreakGenericLink<GenericOutputPipe2>>) => GenericOutputPipe3,
	pipe4: (input: Awaited<BreakGenericLink<GenericOutputPipe3>>) => GenericOutputPipe4,
	pipe5: (input: Awaited<BreakGenericLink<GenericOutputPipe4>>) => GenericOutputPipe5,
	pipe6: (input: Awaited<BreakGenericLink<GenericOutputPipe5>>) => GenericOutputPipe6,
	pipe7: (input: Awaited<BreakGenericLink<GenericOutputPipe6>>) => GenericOutputPipe7,
	pipe8: (input: Awaited<BreakGenericLink<GenericOutputPipe7>>) => GenericOutputPipe8,
): Promise<
	Awaited<GenericOutputPipe8>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe4 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe5 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe6 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe7 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe8 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe9 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
	pipe2: (input: Awaited<BreakGenericLink<GenericOutputPipe1>>) => GenericOutputPipe2,
	pipe3: (input: Awaited<BreakGenericLink<GenericOutputPipe2>>) => GenericOutputPipe3,
	pipe4: (input: Awaited<BreakGenericLink<GenericOutputPipe3>>) => GenericOutputPipe4,
	pipe5: (input: Awaited<BreakGenericLink<GenericOutputPipe4>>) => GenericOutputPipe5,
	pipe6: (input: Awaited<BreakGenericLink<GenericOutputPipe5>>) => GenericOutputPipe6,
	pipe7: (input: Awaited<BreakGenericLink<GenericOutputPipe6>>) => GenericOutputPipe7,
	pipe8: (input: Awaited<BreakGenericLink<GenericOutputPipe7>>) => GenericOutputPipe8,
	pipe9: (input: Awaited<BreakGenericLink<GenericOutputPipe8>>) => GenericOutputPipe9,
): Promise<
	Awaited<GenericOutputPipe9>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe4 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe5 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe6 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe7 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe8 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe9 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe10 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<BreakGenericLink<GenericInput>>) => GenericOutputPipe1,
	pipe2: (input: Awaited<BreakGenericLink<GenericOutputPipe1>>) => GenericOutputPipe2,
	pipe3: (input: Awaited<BreakGenericLink<GenericOutputPipe2>>) => GenericOutputPipe3,
	pipe4: (input: Awaited<BreakGenericLink<GenericOutputPipe3>>) => GenericOutputPipe4,
	pipe5: (input: Awaited<BreakGenericLink<GenericOutputPipe4>>) => GenericOutputPipe5,
	pipe6: (input: Awaited<BreakGenericLink<GenericOutputPipe5>>) => GenericOutputPipe6,
	pipe7: (input: Awaited<BreakGenericLink<GenericOutputPipe6>>) => GenericOutputPipe7,
	pipe8: (input: Awaited<BreakGenericLink<GenericOutputPipe7>>) => GenericOutputPipe8,
	pipe9: (input: Awaited<BreakGenericLink<GenericOutputPipe8>>) => GenericOutputPipe9,
	pipe10: (input: Awaited<BreakGenericLink<GenericOutputPipe9>>) => GenericOutputPipe10,
): Promise<
	Awaited<GenericOutputPipe10>
>;

export async function asyncPipe(input: AnyValue, ...pipes: AnyFunction[]) {
	let acc = await input;

	for (const pipe of pipes) {
		acc = await pipe(acc);
	}

	return acc;
}
