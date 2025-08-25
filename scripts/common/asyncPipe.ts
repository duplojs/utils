/* eslint-disable @typescript-eslint/max-params */
import { type AnyFunction } from "./types/anyFunction";
import { type AnyValue } from "./types/anyValue";
import { type MaybePromise } from "./types/maybePromise";

export function asyncPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
>(
	input: MaybePromise<GenericInput>,
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
): Promise<GenericOutputPipe1>;

export function asyncPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
>(
	input: MaybePromise<GenericInput>,
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
): Promise<GenericOutputPipe2>;

export function asyncPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
>(
	input: MaybePromise<GenericInput>,
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
): Promise<GenericOutputPipe3>;

export function asyncPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
>(
	input: MaybePromise<GenericInput>,
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
): Promise<GenericOutputPipe4>;

export function asyncPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
>(
	input: MaybePromise<GenericInput>,
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
): Promise<GenericOutputPipe5>;

export function asyncPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
>(
	input: MaybePromise<GenericInput>,
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
): Promise<GenericOutputPipe6>;

export function asyncPipe<
	GenericInput extends AnyValue,
	GenericOutputPipe1 extends AnyValue,
	GenericOutputPipe2 extends AnyValue,
	GenericOutputPipe3 extends AnyValue,
	GenericOutputPipe4 extends AnyValue,
	GenericOutputPipe5 extends AnyValue,
	GenericOutputPipe6 extends AnyValue,
	GenericOutputPipe7 extends AnyValue,
>(
	input: MaybePromise<GenericInput>,
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
): Promise<GenericOutputPipe7>;

export function asyncPipe<
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
	input: MaybePromise<GenericInput>,
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
): Promise<GenericOutputPipe8>;

export function asyncPipe<
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
	input: MaybePromise<GenericInput>,
	pipe1: (input: GenericInput) => MaybePromise<GenericOutputPipe1>,
	pipe2: (input: GenericOutputPipe1) => MaybePromise<GenericOutputPipe2>,
	pipe3: (input: GenericOutputPipe2) => MaybePromise<GenericOutputPipe3>,
	pipe4: (input: GenericOutputPipe3) => MaybePromise<GenericOutputPipe4>,
	pipe5: (input: GenericOutputPipe4) => MaybePromise<GenericOutputPipe5>,
	pipe6: (input: GenericOutputPipe5) => MaybePromise<GenericOutputPipe6>,
	pipe7: (input: GenericOutputPipe6) => MaybePromise<GenericOutputPipe7>,
	pipe8: (input: GenericOutputPipe7) => MaybePromise<GenericOutputPipe8>,
	pipe9: (input: GenericOutputPipe8) => MaybePromise<GenericOutputPipe9>,
): Promise<GenericOutputPipe9>;

export function asyncPipe<
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
	input: MaybePromise<GenericInput>,
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
): Promise<GenericOutputPipe10>;
export async function asyncPipe(input: AnyValue, ...pipes: AnyFunction[]) {
	let acc = await input;

	for (const pipe of pipes) {
		acc = await pipe(acc);
	}

	return acc;
}
