import { D, DPE, E, unwrap } from "@scripts";

const minTime = D.createTime(0, "millisecond");
const maxTime = D.createTime(10000, "millisecond");

const parser = DPE.time()
	.min(minTime)
	.max(maxTime);
const result = parser.parse("time10+");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheTime
}

const coerceParser = DPE.coerce.time();
const coerceResult = coerceParser.parse("10:20:00");
// E.Error<DPE.DataParserError> | E.Success<D.TheTime>

const minOnly = DPE.time().min(minTime);
const minResult = minOnly.parse("time0+");
// E.Error<DPE.DataParserError> | E.Success<D.TheTime>
