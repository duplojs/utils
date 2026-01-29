import { DPE, E, unwrap } from "@scripts";

const parser = DPE.time().min("time0+").max("time100+");
const result = parser.parse(10);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheTime
}

const coerceParser = DPE.coerce.time();
const coerceResult = coerceParser.parse("10:20:00");

const minOnly = DPE.time().min("time0+");
const minResult = minOnly.parse("time0+");
