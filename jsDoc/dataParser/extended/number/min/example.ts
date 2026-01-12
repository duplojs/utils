import { DPE, E, unwrap } from "@scripts";

const parser = DPE.number().min(0);
const result = parser.parse(3);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const withMessage = DPE.number().min(10, { errorMessage: "number.too-small" });
const messageResult = withMessage.parse(10);

const chained = DPE.number().min(1).max(5);
const chainedResult = chained.parse(3);
