/* eslint-disable @typescript-eslint/max-params */
import { type MaybeFutureEither } from "@scripts/either/future/maybeFutureEither";
import { type BreakGenericLink, type EscapeVoid } from "./types";
import { type AnyFunction } from "./types/anyFunction";
import { type AnyValue } from "./types/anyValue";
import { type MaybePromise } from "./types/maybePromise";

type MaybePromiseLike<GenericValue extends unknown> = MaybePromise<GenericValue> | MaybeFutureEither<GenericValue>;

/**
 * {@include common/asyncPipe/index.md}
 */
export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe1>>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe2>>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe3>>
>;

export function asyncPipe<
	GenericInput extends MaybePromiseLike<AnyValue>,
	GenericOutputPipe1 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe2 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe3 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe4 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe4>>
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
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe5>>
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
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe6>>
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
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe7>>
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
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe8>>
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
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: Awaited<GenericOutputPipe8>) => GenericOutputPipe9,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe9>>
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
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: Awaited<GenericOutputPipe8>) => GenericOutputPipe9,
	pipe10: (input: Awaited<GenericOutputPipe9>) => GenericOutputPipe10,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe10>>
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
	GenericOutputPipe11 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: Awaited<GenericOutputPipe8>) => GenericOutputPipe9,
	pipe10: (input: Awaited<GenericOutputPipe9>) => GenericOutputPipe10,
	pipe11: (input: Awaited<GenericOutputPipe10>) => GenericOutputPipe11,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe11>>
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
	GenericOutputPipe11 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe12 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: Awaited<GenericOutputPipe8>) => GenericOutputPipe9,
	pipe10: (input: Awaited<GenericOutputPipe9>) => GenericOutputPipe10,
	pipe11: (input: Awaited<GenericOutputPipe10>) => GenericOutputPipe11,
	pipe12: (input: Awaited<GenericOutputPipe11>) => GenericOutputPipe12,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe12>>
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
	GenericOutputPipe11 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe12 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe13 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: Awaited<GenericOutputPipe8>) => GenericOutputPipe9,
	pipe10: (input: Awaited<GenericOutputPipe9>) => GenericOutputPipe10,
	pipe11: (input: Awaited<GenericOutputPipe10>) => GenericOutputPipe11,
	pipe12: (input: Awaited<GenericOutputPipe11>) => GenericOutputPipe12,
	pipe13: (input: Awaited<GenericOutputPipe12>) => GenericOutputPipe13,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe13>>
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
	GenericOutputPipe11 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe12 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe13 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe14 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: Awaited<GenericOutputPipe8>) => GenericOutputPipe9,
	pipe10: (input: Awaited<GenericOutputPipe9>) => GenericOutputPipe10,
	pipe11: (input: Awaited<GenericOutputPipe10>) => GenericOutputPipe11,
	pipe12: (input: Awaited<GenericOutputPipe11>) => GenericOutputPipe12,
	pipe13: (input: Awaited<GenericOutputPipe12>) => GenericOutputPipe13,
	pipe14: (input: Awaited<GenericOutputPipe13>) => GenericOutputPipe14,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe14>>
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
	GenericOutputPipe11 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe12 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe13 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe14 extends MaybePromiseLike<AnyValue | EscapeVoid>,
	GenericOutputPipe15 extends MaybePromiseLike<AnyValue | EscapeVoid>,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: Awaited<GenericOutputPipe8>) => GenericOutputPipe9,
	pipe10: (input: Awaited<GenericOutputPipe9>) => GenericOutputPipe10,
	pipe11: (input: Awaited<GenericOutputPipe10>) => GenericOutputPipe11,
	pipe12: (input: Awaited<GenericOutputPipe11>) => GenericOutputPipe12,
	pipe13: (input: Awaited<GenericOutputPipe12>) => GenericOutputPipe13,
	pipe14: (input: Awaited<GenericOutputPipe13>) => GenericOutputPipe14,
	pipe15: (input: Awaited<GenericOutputPipe14>) => GenericOutputPipe15,
): Promise<
	Awaited<BreakGenericLink<GenericOutputPipe15>>
>;

/**
 * {@include common/asyncPipe/index.md}
 */
export async function asyncPipe(input: AnyValue, ...pipes: AnyFunction[]) {
	let acc = await input;

	for (const pipe of pipes) {
		acc = await pipe(acc);
	}

	return acc;
}
