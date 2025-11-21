/* eslint-disable @typescript-eslint/max-params */
import { type BreakGenericLink, type EscapeVoid } from "./types";
import { type AnyFunction } from "./types/anyFunction";
import { type AnyValue } from "./types/anyValue";

export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
): BreakGenericLink<GenericOutputPipe1>;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
): BreakGenericLink<GenericOutputPipe2>;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
): BreakGenericLink<GenericOutputPipe3>;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
): BreakGenericLink<GenericOutputPipe4>;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
): BreakGenericLink<GenericOutputPipe5>;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
	GenericOutputPipe6 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
): BreakGenericLink<GenericOutputPipe6>;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
	GenericOutputPipe6 extends AnyValue | EscapeVoid,
	GenericOutputPipe7 extends AnyValue | EscapeVoid,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
): BreakGenericLink<GenericOutputPipe7>;
export function pipe<
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
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
): BreakGenericLink<GenericOutputPipe8>;
export function pipe<
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
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
	pipe8: (input: GenericOutputPipe7) => GenericOutputPipe8,
	pipe9: (input: GenericOutputPipe8) => GenericOutputPipe9,
): BreakGenericLink<GenericOutputPipe9>;
export function pipe<
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
	input: GenericInput,
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
): BreakGenericLink<GenericOutputPipe10>;
export function pipe(input: AnyValue, ...pipes: AnyFunction[]) {
	let acc = input;

	for (const pipe of pipes) {
		acc = pipe(acc);
	}

	return acc;
}
