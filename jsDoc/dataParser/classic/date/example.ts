import { DP, E, unwrap } from "@scripts";

const parser = DP.date();
const result = parser.parse("date0+");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: TheDate
}

const withCheckers = DP.date({
	checkers: [DP.checkerRefine((value) => value.getUTCFullYear() >= 2024)],
});
const checked = withCheckers.parse("date1704067200000+");
// checked: E.Error<DP.DataParserError> | E.Success<TheDate>

const coerceParser = DP.coerce.date();
const coerceResult = coerceParser.parse("2024-01-01T00:00:00.000Z");
// coerceResult: E.Error<DP.DataParserError> | E.Success<TheDate>
