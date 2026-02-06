import { D, DPE, E, unwrap } from "@scripts";

const timeMin = D.createTime(0, "millisecond");
const timeMax = D.createTime(100, "millisecond");

const parser = DPE.time().min(timeMin);
const result = parser.parse("time10+");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheTime
}

const withMessage = DPE.time().min(timeMin, { errorMessage: "time.too-small" });
const messageResult = withMessage.parse("time0+");

const chained = DPE.time().min(timeMin).max(timeMax);
const chainedResult = chained.parse("time10+");
