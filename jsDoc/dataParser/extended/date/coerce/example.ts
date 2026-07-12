import { DPE, E, unwrap } from "@scripts";

const parser = DPE.date().coerce();
const result = parser.parse("2024-01-01T00:00:00.000Z");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheDate
}

const fromTimestamp = DPE.date().coerce();
const timestampResult = fromTimestamp.parse(1);

const nullableDate = DPE.date()
	.coerce()
	.nullable();
const nullableResult = nullableDate.parse(null);
