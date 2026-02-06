import { D, DPE, E, unwrap } from "@scripts";

const timeMax = D.createTime(1, "second");
const timeMin = D.createTime(0, "millisecond");

const parser = DPE.time().max(timeMax);
const result = parser.parse("time10+");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheTime
}

const withMessage = DPE.time().max(timeMax, { errorMessage: "time.too-large" });
const messageResult = withMessage.parse("time100+");

const chained = DPE.time().min(timeMin).max(timeMax);
const chainedResult = chained.parse("time10+");
