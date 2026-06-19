import { type BreakGenericLink, type AnyFunction } from "./types";

export interface PreparePipe<
	GenericInput extends unknown = undefined,
> {
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1
	): (input: GenericLocalInput) => GenericOutputPipe1;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2
	): (input: GenericLocalInput) => GenericOutputPipe2;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
		pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3
	): (input: GenericLocalInput) => GenericOutputPipe3;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
		const GenericOutputPipe4 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
		pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
		pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4
	): (input: GenericLocalInput) => GenericOutputPipe4;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
		const GenericOutputPipe4 extends unknown,
		const GenericOutputPipe5 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
		pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
		pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
		pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5
	): (input: GenericLocalInput) => GenericOutputPipe5;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
		const GenericOutputPipe4 extends unknown,
		const GenericOutputPipe5 extends unknown,
		const GenericOutputPipe6 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
		pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
		pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
		pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
		pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6
	): (input: GenericLocalInput) => GenericOutputPipe6;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
		const GenericOutputPipe4 extends unknown,
		const GenericOutputPipe5 extends unknown,
		const GenericOutputPipe6 extends unknown,
		const GenericOutputPipe7 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
		pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
		pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
		pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
		pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
		pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7
	): (input: GenericLocalInput) => GenericOutputPipe7;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
		const GenericOutputPipe4 extends unknown,
		const GenericOutputPipe5 extends unknown,
		const GenericOutputPipe6 extends unknown,
		const GenericOutputPipe7 extends unknown,
		const GenericOutputPipe8 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
		pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
		pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
		pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
		pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
		pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
		pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8
	): (input: GenericLocalInput) => GenericOutputPipe8;
	<
		const GenericLocalInput extends GenericInput,
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
		pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
		pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
		pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
		pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
		pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
		pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
		pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9
	): (input: GenericLocalInput) => GenericOutputPipe9;
	<
		const GenericLocalInput extends GenericInput,
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
		pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
		pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
		pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
		pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
		pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
		pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
		pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
		pipe10: (input: GenericOutputPipe9) => GenericOutputPipe10
	): (input: GenericLocalInput) => GenericOutputPipe10;
	<
		const GenericLocalInput extends GenericInput,
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
		pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
		pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
		pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
		pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
		pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
		pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
		pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
		pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
		pipe10: (input: GenericOutputPipe9) => GenericOutputPipe10,
		pipe11: (input: GenericOutputPipe10) => GenericOutputPipe11
	): (input: GenericLocalInput) => GenericOutputPipe11;
	<
		const GenericLocalInput extends GenericInput,
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
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
		pipe12: (input: GenericOutputPipe11) => GenericOutputPipe12
	): (input: GenericLocalInput) => GenericOutputPipe12;
	<
		const GenericLocalInput extends GenericInput,
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
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
		pipe13: (input: GenericOutputPipe12) => GenericOutputPipe13
	): (input: GenericLocalInput) => GenericOutputPipe13;
	<
		const GenericLocalInput extends GenericInput,
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
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
		pipe14: (input: GenericOutputPipe13) => GenericOutputPipe14
	): (input: GenericLocalInput) => GenericOutputPipe14;
	<
		const GenericLocalInput extends GenericInput,
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => GenericOutputPipe1,
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
		pipe15: (input: GenericOutputPipe14) => GenericOutputPipe15
	): (input: GenericLocalInput) => GenericOutputPipe15;
}

/** {@include common/preparePipe/index.md} */
export function preparePipe<
	GenericInput extends unknown = unknown,
>(): PreparePipe<GenericInput> {
	return (...pipes: AnyFunction[]) => (input: GenericInput) => {
		let acc = input;

		for (const pipe of pipes) {
			acc = pipe(acc);
		}

		return acc;
	};
}
