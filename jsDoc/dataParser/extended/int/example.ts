import { DPE, E, unwrap } from "@scripts";

const parser = DPE.int();
const result = parser.parse(10);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: number
}

const withMessage = DPE.int({ errorMessage: "number.not-int" });
const messageResult = withMessage.parse(5);

const withRange = DPE.int().min(0).max(10);
const rangeResult = withRange.parse(3);
