/* eslint-disable @typescript-eslint/max-params */
import { type BreakGenericLink } from "./types";
import { type AnyFunction } from "./types/anyFunction";
import { type AnyValue } from "./types/anyValue";

/**
 * {@include common/asyncPipe/index.md}
 */
export function asyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
): Promise<
	BreakGenericLink<Awaited<GenericOutputPipe1>>
>;

export function asyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
): Promise<
	BreakGenericLink<Awaited<GenericOutputPipe2>>
>;

export function asyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
): Promise<
	BreakGenericLink<Awaited<GenericOutputPipe3>>
>;

export function asyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
): Promise<
	BreakGenericLink<Awaited<GenericOutputPipe4>>
>;

export function asyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
): Promise<
	BreakGenericLink<Awaited<GenericOutputPipe5>>
>;

export function asyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
>(
	input: GenericInput,
	pipe1: (input: Awaited<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: Awaited<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: Awaited<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: Awaited<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: Awaited<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: Awaited<GenericOutputPipe5>) => GenericOutputPipe6,
): Promise<
	BreakGenericLink<Awaited<GenericOutputPipe6>>
>;

export function asyncPipe<
	const GenericInput extends unknown,
	const GenericOutputPipe1 extends unknown,
	const GenericOutputPipe2 extends unknown,
	const GenericOutputPipe3 extends unknown,
	const GenericOutputPipe4 extends unknown,
	const GenericOutputPipe5 extends unknown,
	const GenericOutputPipe6 extends unknown,
	const GenericOutputPipe7 extends unknown,
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
	BreakGenericLink<Awaited<GenericOutputPipe7>>
>;

export function asyncPipe<
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
	BreakGenericLink<Awaited<GenericOutputPipe8>>
>;

export function asyncPipe<
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
	BreakGenericLink<Awaited<GenericOutputPipe9>>
>;

export function asyncPipe<
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
	BreakGenericLink<Awaited<GenericOutputPipe10>>
>;
export function asyncPipe<
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
	BreakGenericLink<Awaited<GenericOutputPipe11>>
>;
export function asyncPipe<
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
	BreakGenericLink<Awaited<GenericOutputPipe12>>
>;
export function asyncPipe<
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
	BreakGenericLink<Awaited<GenericOutputPipe13>>
>;
export function asyncPipe<
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
	BreakGenericLink<Awaited<GenericOutputPipe14>>
>;
export function asyncPipe<
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
	BreakGenericLink<Awaited<GenericOutputPipe15>>
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
