import { DPE, E, unwrap } from "@scripts";

const parser = DPE.time().min("time0+");
const result = parser.parse("time10+");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheTime
}

const withMessage = DPE.time().min("time0+", { errorMessage: "time.too-small" });
const messageResult = withMessage.parse("time0+");

const chained = DPE.time().min("time0+").max("time100+");
const chainedResult = chained.parse("time10+");
