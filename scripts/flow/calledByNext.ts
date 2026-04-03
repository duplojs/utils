/* eslint-disable @typescript-eslint/require-await */
import { createCalledByNext } from "./theFlow";

/**
 * {@include flow/calledByNext/index.md}
 */
export async function *calledByNext<
	GenericOutput extends unknown,
>(
	theFunction: () => GenericOutput,
) {
	yield createCalledByNext(theFunction);
}
