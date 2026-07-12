import { D, DPE, E, unwrap } from "@scripts";

const parser = DPE.time().coerce();
const result = parser.parse("01:02");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheTime
}

const withMin = DPE.time()
	.min(D.createTime(1, "minute"))
	.coerce();
const minResult = withMin.parse("01:02");

const nullableTime = DPE.time()
	.coerce()
	.nullable();
const nullableResult = nullableTime.parse(null);
