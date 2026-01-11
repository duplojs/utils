import { DP, E, unwrap } from "@scripts";

const stringSchema = DP.string();

const result = stringSchema.parse("DuploJS");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const resultWithError = DP.string({
	checkers: [DP.checkerStringMin(3)],
}).parse("ok");

if (E.isLeft(resultWithError)) {
	const error = unwrap(resultWithError);
	// error: DP.DataParserError
}

const numberSchema = DP.coerce.number();
const numberResult = numberSchema.parse("42");
if (E.isRight(numberResult)) {
	const value = unwrap(numberResult);
	// value: number
}
