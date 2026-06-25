/* eslint-disable @typescript-eslint/max-params */
import { type MaybePromise, type BreakGenericLink, type AnyFunction } from "./types";

/**
 * {@include common/asyncInnerPipe/index.md}
 */
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
>(
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe1>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
>(
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe2>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
>(
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe3>>
>;

export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
>(
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe4>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
>(
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe5>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
>(
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe6>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
>(
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe7>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
>(
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe8>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
>(
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: Awaited<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: Awaited<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: Awaited<GenericOutputPipe8>) => GenericOutputPipe9,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe9>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
>(
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
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe10>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
>(
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
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe11>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
	const GenericOutputPipe12 extends unknown,
>(
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
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe12>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
	const GenericOutputPipe12 extends unknown,
	const GenericOutputPipe13 extends unknown,
>(
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
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe13>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
	const GenericOutputPipe12 extends unknown,
	const GenericOutputPipe13 extends unknown,
	const GenericOutputPipe14 extends unknown,
>(
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
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe14>>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
	const GenericOutputPipe8 extends unknown,
	const GenericOutputPipe9 extends unknown,
	const GenericOutputPipe10 extends unknown,
	const GenericOutputPipe11 extends unknown,
	const GenericOutputPipe12 extends unknown,
	const GenericOutputPipe13 extends unknown,
	const GenericOutputPipe14 extends unknown,
	const GenericOutputPipe15 extends unknown,
>(
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
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<Awaited<GenericOutputPipe15>>
>;

export function asyncInnerPipe(...pipes: AnyFunction[]) {
	return async(input: any) => {
		let acc = await input;

		for (const pipe of pipes) {
			acc = await pipe(acc);
		}

		return acc;
	};
}
