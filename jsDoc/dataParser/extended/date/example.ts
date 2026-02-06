import { DPE, E, unwrap } from "@scripts";

const parser = DPE.date();
const result = parser.parse("date0+");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheDate
}

const coerceParser = DPE.coerce.date();
const coerceResult = coerceParser.parse("2024-01-01T00:00:00.000Z");
// coerceResult: E.Error<DP.DataParserError> | E.Success<TheDate>

const nullableDate = DPE.date().nullable();
const nullableResult = nullableDate.parse(null);
// nullableResult: E.Error<DPE.DataParserError> | E.Success<TheDate | null>
