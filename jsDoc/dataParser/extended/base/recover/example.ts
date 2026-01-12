import { DPE, DP, E, unwrap } from "@scripts";

const parser = DPE.number().recover(0);
const result = parser.parse("not-a-number");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const fallbackString = DPE.string().recover("fallback");
const stringResult = fallbackString.parse(123);
