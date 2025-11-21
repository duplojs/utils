/* eslint-disable @typescript-eslint/max-params */

import { type MaybeFutureEither } from "@scripts/either/future/maybeFutureEither";
import { type MaybePromise, type EscapeVoid, type BreakGenericLink } from "./types";
import { type AnyFunction } from "./types/anyFunction";
import { type AnyValue } from "./types/anyValue";

type MaybePromiseLike<GenericValue extends unknown> = MaybePromise<GenericValue> | MaybeFutureEither<GenericValue>;

export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe1>>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromiseLike<GenericOutputPipe2>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe2>>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromiseLike<GenericOutputPipe3>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe3>>
>;

export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromiseLike<GenericOutputPipe4>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe4>>
>;
export function asyncInnerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromiseLike<GenericOutputPipe5>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe5>>
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
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromiseLike<GenericOutputPipe6>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe6>>
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
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromiseLike<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromiseLike<GenericOutputPipe7>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe7>>
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
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromiseLike<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromiseLike<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromiseLike<GenericOutputPipe8>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe8>>
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
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromiseLike<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromiseLike<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromiseLike<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromiseLike<GenericOutputPipe9>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe9>>
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
	pipe1: (input: GenericInput) => MaybePromiseLike<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromiseLike<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromiseLike<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromiseLike<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromiseLike<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromiseLike<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromiseLike<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromiseLike<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromiseLike<GenericOutputPipe9>,
	pipe10: (input: GenericOutputPipe9) => MaybePromiseLike<GenericOutputPipe10>,
): (input: MaybePromiseLike<GenericInput>) => Promise<
	Awaited<BreakGenericLink<GenericOutputPipe10>>
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
