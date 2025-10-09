/* eslint-disable @typescript-eslint/max-params */
import { type BreakGenericLink, type EscapeVoid } from "./types";
import { type AnyFunction } from "./types/anyFunction";
import { type AnyValue } from "./types/anyValue";

export function innerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
): (input: GenericInput) => GenericOutputPipe1;
export function innerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => GenericOutputPipe2,
): (input: GenericInput) => GenericOutputPipe2;
export function innerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => GenericOutputPipe3,
): (input: GenericInput) => GenericOutputPipe3;
export function innerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => GenericOutputPipe4,
): (input: GenericInput) => GenericOutputPipe4;
export function innerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => GenericOutputPipe5,
): (input: GenericInput) => GenericOutputPipe5;
export function innerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
	GenericOutputPipe6 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => GenericOutputPipe6,
): (input: GenericInput) => GenericOutputPipe6;
export function innerPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue | EscapeVoid,
	GenericOutputPipe2 extends AnyValue | EscapeVoid,
	GenericOutputPipe3 extends AnyValue | EscapeVoid,
	GenericOutputPipe4 extends AnyValue | EscapeVoid,
	GenericOutputPipe5 extends AnyValue | EscapeVoid,
	GenericOutputPipe6 extends AnyValue | EscapeVoid,
	GenericOutputPipe7 extends AnyValue | EscapeVoid,
>(
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: BreakGenericLink<GenericOutputPipe6>) => GenericOutputPipe7,
): (input: GenericInput) => GenericOutputPipe7;
export function innerPipe<
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
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: BreakGenericLink<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: BreakGenericLink<GenericOutputPipe7>) => GenericOutputPipe8,
): (input: GenericInput) => GenericOutputPipe8;
export function innerPipe<
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
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: BreakGenericLink<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: BreakGenericLink<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: BreakGenericLink<GenericOutputPipe8>) => GenericOutputPipe9,
): (input: GenericInput) => GenericOutputPipe9;
export function innerPipe<
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
	pipe1: (input: BreakGenericLink<GenericInput>) => GenericOutputPipe1,
	pipe2: (input: BreakGenericLink<GenericOutputPipe1>) => GenericOutputPipe2,
	pipe3: (input: BreakGenericLink<GenericOutputPipe2>) => GenericOutputPipe3,
	pipe4: (input: BreakGenericLink<GenericOutputPipe3>) => GenericOutputPipe4,
	pipe5: (input: BreakGenericLink<GenericOutputPipe4>) => GenericOutputPipe5,
	pipe6: (input: BreakGenericLink<GenericOutputPipe5>) => GenericOutputPipe6,
	pipe7: (input: BreakGenericLink<GenericOutputPipe6>) => GenericOutputPipe7,
	pipe8: (input: BreakGenericLink<GenericOutputPipe7>) => GenericOutputPipe8,
	pipe9: (input: BreakGenericLink<GenericOutputPipe8>) => GenericOutputPipe9,
	pipe10: (input: BreakGenericLink<GenericOutputPipe9>) => GenericOutputPipe10,
): (input: GenericInput) => GenericOutputPipe10;

export function innerPipe(...pipes: AnyFunction[]) {
	return (input: any) => {
		let acc = input;

		for (const pipe of pipes) {
			acc = pipe(acc);
		}

		return acc;
	};
}
