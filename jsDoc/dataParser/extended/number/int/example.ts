import { DPE, E, unwrap } from "@scripts";

const parser = DPE.number().int();
const result = parser.parse(4);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const withMessage = DPE.number().int({ errorMessage: "number.not-int" });
const messageResult = withMessage.parse(10);

const chained = DPE.number().min(0).int();
const chainedResult = chained.parse(3);
