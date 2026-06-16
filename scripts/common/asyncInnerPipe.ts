/* eslint-disable @typescript-eslint/max-params */
import { type MaybePromise, type BreakGenericLink, type AnyFunction } from "./types";

/**
 * {@include common/asyncInnerPipe/index.md}
 */
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
>(
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe1>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
>(
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe2>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
>(
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe3>
>;

export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
>(
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe4>
>;
export function asyncInnerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
>(
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe5>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe6>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe7>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe8>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe9>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
	pipe10: (input: GenericOutputPipe9) => MaybePromise<GenericOutputPipe10>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe10>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
	pipe10: (input: GenericOutputPipe9) => MaybePromise<GenericOutputPipe10>,
	pipe11: (input: GenericOutputPipe10) => MaybePromise<GenericOutputPipe11>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe11>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
	pipe10: (input: GenericOutputPipe9) => MaybePromise<GenericOutputPipe10>,
	pipe11: (input: GenericOutputPipe10) => MaybePromise<GenericOutputPipe11>,
	pipe12: (input: GenericOutputPipe11) => MaybePromise<GenericOutputPipe12>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe12>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
	pipe10: (input: GenericOutputPipe9) => MaybePromise<GenericOutputPipe10>,
	pipe11: (input: GenericOutputPipe10) => MaybePromise<GenericOutputPipe11>,
	pipe12: (input: GenericOutputPipe11) => MaybePromise<GenericOutputPipe12>,
	pipe13: (input: GenericOutputPipe12) => MaybePromise<GenericOutputPipe13>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe13>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
	pipe10: (input: GenericOutputPipe9) => MaybePromise<GenericOutputPipe10>,
	pipe11: (input: GenericOutputPipe10) => MaybePromise<GenericOutputPipe11>,
	pipe12: (input: GenericOutputPipe11) => MaybePromise<GenericOutputPipe12>,
	pipe13: (input: GenericOutputPipe12) => MaybePromise<GenericOutputPipe13>,
	pipe14: (input: GenericOutputPipe13) => MaybePromise<GenericOutputPipe14>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe14>
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
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
	pipe10: (input: GenericOutputPipe9) => MaybePromise<GenericOutputPipe10>,
	pipe11: (input: GenericOutputPipe10) => MaybePromise<GenericOutputPipe11>,
	pipe12: (input: GenericOutputPipe11) => MaybePromise<GenericOutputPipe12>,
	pipe13: (input: GenericOutputPipe12) => MaybePromise<GenericOutputPipe13>,
	pipe14: (input: GenericOutputPipe13) => MaybePromise<GenericOutputPipe14>,
	pipe15: (input: GenericOutputPipe14) => MaybePromise<GenericOutputPipe15>,
): (input: MaybePromise<GenericInput>) => Promise<
	BreakGenericLink<GenericOutputPipe15>
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
