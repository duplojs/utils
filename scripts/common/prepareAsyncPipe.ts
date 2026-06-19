import { type BreakGenericLink, type AnyFunction, type MaybePromise } from "./types";

export interface PrepareAsyncPipe<
	GenericInput extends unknown = undefined,
> {
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe1>;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe2>;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
		pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe3>;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
		const GenericOutputPipe4 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
		pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
		pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe4>;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
		const GenericOutputPipe4 extends unknown,
		const GenericOutputPipe5 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
		pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
		pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
		pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe5>;
	<
		const GenericLocalInput extends GenericInput,
		const GenericOutputPipe1 extends unknown,
		const GenericOutputPipe2 extends unknown,
		const GenericOutputPipe3 extends unknown,
		const GenericOutputPipe4 extends unknown,
		const GenericOutputPipe5 extends unknown,
		const GenericOutputPipe6 extends unknown,
	>(
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
		pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
		pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
		pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
		pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe6>;
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
		pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
		pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
		pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
		pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
		pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe7>;
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
		pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
		pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
		pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
		pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
		pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
		pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe8>;
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
		pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
		pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
		pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
		pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
		pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
		pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
		pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe9>;
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
		pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
		pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
		pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
		pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
		pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
		pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
		pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
		pipe10: (input: GenericOutputPipe9) => MaybePromise<GenericOutputPipe10>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe10>;
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
		pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
		pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
		pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
		pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
		pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
		pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
		pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
		pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
		pipe10: (input: GenericOutputPipe9) => MaybePromise<GenericOutputPipe10>,
		pipe11: (input: GenericOutputPipe10) => MaybePromise<GenericOutputPipe11>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe11>;
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
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
		pipe12: (input: GenericOutputPipe11) => MaybePromise<GenericOutputPipe12>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe12>;
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
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
		pipe13: (input: GenericOutputPipe12) => MaybePromise<GenericOutputPipe13>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe13>;
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
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
		pipe14: (input: GenericOutputPipe13) => MaybePromise<GenericOutputPipe14>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe14>;
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
		pipe1: (input: BreakGenericLink<GenericLocalInput>) => MaybePromise<GenericOutputPipe1>,
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
		pipe15: (input: GenericOutputPipe14) => MaybePromise<GenericOutputPipe15>
	): (input: MaybePromise<GenericLocalInput>) => Promise<GenericOutputPipe15>;
}

/** {@include common/prepareAsyncPipe/index.md} */
export function prepareAsyncPipe<
	GenericInput extends unknown = unknown,
>(): PrepareAsyncPipe<GenericInput> {
	return (...pipes: AnyFunction[]) => async(input: MaybePromise<GenericInput>) => {
		let acc = await input;

		for (const pipe of pipes) {
			acc = await pipe(acc);
		}

		return acc;
	};
}
