/* eslint-disable @typescript-eslint/require-await */
import { createCalledByNext } from "./theFlow";

export async function *calledByNext<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
) {
	yield createCalledByNext(theFunction);
}
