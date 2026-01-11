import { DPE, E, unwrap } from "@scripts";

const parser = DPE.string().min(3);
const result = parser.parse("abc");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const withMessage = DPE.string().min(5, { errorMessage: "string.too-short" });
const messageResult = withMessage.parse("hello");

const chained = DPE.string().min(2).max(5);
const chainedResult = chained.parse("abcd");
