import { DPE, E, unwrap } from "@scripts";

const parser = DPE.time().max("time100+");
const result = parser.parse("time10+");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheTime
}

const withMessage = DPE.time().max("time100+", { errorMessage: "time.too-large" });
const messageResult = withMessage.parse("time100+");

const chained = DPE.time().min("time0+").max("time100+");
const chainedResult = chained.parse("time10+");
