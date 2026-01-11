import { DPE, E, unwrap } from "@scripts";

const parser = DPE.string().max(5);
const result = parser.parse("short");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const withMessage = DPE.string().max(10, { errorMessage: "string.too-long" });
const messageResult = withMessage.parse("hello");

const chained = DPE.string().min(2).max(4);
const chainedResult = chained.parse("abcd");
