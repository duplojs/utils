/* eslint-disable @typescript-eslint/max-params */
import { type AnyFunction } from "./types/anyFunction";
import { type AnyValue } from "./types/anyValue";

export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
): GenericOutputPipe1;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
): GenericOutputPipe2;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
): GenericOutputPipe3;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
): GenericOutputPipe4;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
): GenericOutputPipe5;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
): GenericOutputPipe6;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
>(
	input: GenericInput,
	pipe1: (input: GenericInput) => GenericOutputPipe1,
	pipe2: (input: GenericOutputPipe1) => GenericOutputPipe2,
	pipe3: (input: GenericOutputPipe2) => GenericOutputPipe3,
	pipe4: (input: GenericOutputPipe3) => GenericOutputPipe4,
	pipe5: (input: GenericOutputPipe4) => GenericOutputPipe5,
	pipe6: (input: GenericOutputPipe5) => GenericOutputPipe6,
	pipe7: (input: GenericOutputPipe6) => GenericOutputPipe7,
): GenericOutputPipe7;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
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
): GenericOutputPipe8;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
	GenericOutputPipe9 extends AnyValue,
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
): GenericOutputPipe9;
export function pipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
	GenericOutputPipe8 extends AnyValue,
	GenericOutputPipe9 extends AnyValue,
	GenericOutputPipe10 extends AnyValue,
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
): GenericOutputPipe10;
export function pipe(input: AnyValue, ...pipes: AnyFunction[]) {
	let acc = input;

	for (const pipe of pipes) {
		acc = pipe(acc);
	}

	return acc;
}
