import { DPE, E, unwrap } from "@scripts";

const parser = DPE.number().max(10);
const result = parser.parse(5);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const withMessage = DPE.number().max(100, { errorMessage: "number.too-large" });
const messageResult = withMessage.parse(100);

const chained = DPE.number().min(1).max(5);
const chainedResult = chained.parse(2);
