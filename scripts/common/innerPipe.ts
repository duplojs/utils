/* eslint-disable @typescript-eslint/max-params */
import { type BreakGenericLink } from "./types";
import { type AnyFunction } from "./types/anyFunction";

/**
 * {@include common/innerPipe/index.md}
 */
export function innerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
>(
	pipe1: (input: GenericInput) => GenericOutputPipe1,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe1>;
export function innerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
>(
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe2>;
export function innerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
>(
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe3>;
export function innerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
>(
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe4>;
export function innerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
>(
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe5>;
export function innerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
>(
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe6>;
export function innerPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
>(
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe7>;
export function innerPipe<
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
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe8>;
export function innerPipe<
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
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
	pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe9>;
export function innerPipe<
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
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
	pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
	pipe10: (input: GenericOutputPipe9) => GenericOutputPipe10,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe10>;
export function innerPipe<
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
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
	pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
	pipe10: (input: GenericOutputPipe9) => GenericOutputPipe10,
	pipe11: (input: GenericOutputPipe10) => GenericOutputPipe11,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe11>;
export function innerPipe<
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
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
	pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
	pipe10: (input: GenericOutputPipe9) => GenericOutputPipe10,
	pipe11: (input: GenericOutputPipe10) => GenericOutputPipe11,
	pipe12: (input: GenericOutputPipe11) => GenericOutputPipe12,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe12>;
export function innerPipe<
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
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
	pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
	pipe10: (input: GenericOutputPipe9) => GenericOutputPipe10,
	pipe11: (input: GenericOutputPipe10) => GenericOutputPipe11,
	pipe12: (input: GenericOutputPipe11) => GenericOutputPipe12,
	pipe13: (input: GenericOutputPipe12) => GenericOutputPipe13,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe13>;
export function innerPipe<
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
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
	pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
	pipe10: (input: GenericOutputPipe9) => GenericOutputPipe10,
	pipe11: (input: GenericOutputPipe10) => GenericOutputPipe11,
	pipe12: (input: GenericOutputPipe11) => GenericOutputPipe12,
	pipe13: (input: GenericOutputPipe12) => GenericOutputPipe13,
	pipe14: (input: GenericOutputPipe13) => GenericOutputPipe14,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe14>;
export function innerPipe<
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
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
	pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
	pipe10: (input: GenericOutputPipe9) => GenericOutputPipe10,
	pipe11: (input: GenericOutputPipe10) => GenericOutputPipe11,
	pipe12: (input: GenericOutputPipe11) => GenericOutputPipe12,
	pipe13: (input: GenericOutputPipe12) => GenericOutputPipe13,
	pipe14: (input: GenericOutputPipe13) => GenericOutputPipe14,
	pipe15: (input: GenericOutputPipe14) => GenericOutputPipe15,
): (input: GenericInput) => BreakGenericLink<GenericOutputPipe15>;

export function innerPipe(...pipes: AnyFunction[]) {
	return (input: any) => {
		let acc = input;

		for (const pipe of pipes) {
			acc = pipe(acc);
		}

		return acc;
	};
}
