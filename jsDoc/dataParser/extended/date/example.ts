import { DPE, E, unwrap } from "@scripts";

const parser = DPE.date();
const result = parser.parse(new Date("2024-01-01T00:00:00.000Z"));
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheDate
}

const coerceParser = DPE.coerce.date();
const coerceResult = coerceParser.parse("2024-01-01T00:00:00.000Z");

const nullableDate = DPE.date().nullable();
const nullableResult = nullableDate.parse(null);
