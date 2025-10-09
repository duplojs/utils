/* eslint-disable @typescript-eslint/max-params */

import { type MaybeFutureEither } from "@scripts/either/future/MaybeFutureEither";
import { type MaybePromise, type EscapeVoid, type BreakGenericLink } from "./types";
import { type AnyFunction } from "./types/anyFunction";
import { type AnyValue } from "./types/anyValue";

type MaybePromiseLike<GenericValue extends unknown> = MaybePromise<GenericValue> | MaybeFutureEither<GenericValue>;

export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe1>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => MaybePromiseLike<GenericOutputPipe2>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe2>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => MaybePromiseLike<GenericOutputPipe3>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe3>
>;

export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => MaybePromiseLike<GenericOutputPipe4>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe4>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => MaybePromiseLike<GenericOutputPipe5>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe5>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
	GenericOutputPipe6 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => MaybePromiseLike<GenericOutputPipe6>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe6>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
	GenericOutputPipe6 extends AnyValue | EscapeVoid,
	GenericOutputPipe7 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => MaybePromiseLike<GenericOutputPipe6>,
	pipe7: (input: BreakGenericLink<GenericOutputPipe6>) => MaybePromiseLike<GenericOutputPipe7>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe7>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
	GenericOutputPipe6 extends AnyValue | EscapeVoid,
	GenericOutputPipe7 extends AnyValue | EscapeVoid,
	GenericOutputPipe8 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => MaybePromiseLike<GenericOutputPipe6>,
	pipe7: (input: BreakGenericLink<GenericOutputPipe6>) => MaybePromiseLike<GenericOutputPipe7>,
	pipe8: (input: BreakGenericLink<GenericOutputPipe7>) => MaybePromiseLike<GenericOutputPipe8>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe8>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
	GenericOutputPipe6 extends AnyValue | EscapeVoid,
	GenericOutputPipe7 extends AnyValue | EscapeVoid,
	GenericOutputPipe8 extends AnyValue | EscapeVoid,
	GenericOutputPipe9 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => MaybePromiseLike<GenericOutputPipe6>,
	pipe7: (input: BreakGenericLink<GenericOutputPipe6>) => MaybePromiseLike<GenericOutputPipe7>,
	pipe8: (input: BreakGenericLink<GenericOutputPipe7>) => MaybePromiseLike<GenericOutputPipe8>,
	pipe9: (input: BreakGenericLink<GenericOutputPipe8>) => MaybePromiseLike<GenericOutputPipe9>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe9>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
	GenericOutputPipe6 extends AnyValue | EscapeVoid,
	GenericOutputPipe7 extends AnyValue | EscapeVoid,
	GenericOutputPipe8 extends AnyValue | EscapeVoid,
	GenericOutputPipe9 extends AnyValue | EscapeVoid,
	GenericOutputPipe10 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => MaybePromiseLike<GenericOutputPipe6>,
	pipe7: (input: BreakGenericLink<GenericOutputPipe6>) => MaybePromiseLike<GenericOutputPipe7>,
	pipe8: (input: BreakGenericLink<GenericOutputPipe7>) => MaybePromiseLike<GenericOutputPipe8>,
	pipe9: (input: BreakGenericLink<GenericOutputPipe8>) => MaybePromiseLike<GenericOutputPipe9>,
	pipe10: (input: BreakGenericLink<GenericOutputPipe9>) => MaybePromiseLike<GenericOutputPipe10>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<GenericOutputPipe10>
>;

export function asyncInnerPipe(...pipes: AnyFunction[]) {
	return async(input: any) => {
		let acc = input;

		for (const pipe of pipes) {
			acc = await pipe(acc);
		}

		return acc;
	};
}
