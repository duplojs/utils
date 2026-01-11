import { DPE, E, unwrap } from "@scripts";

const stringSchema = DPE.string().min(3);

const result = stringSchema.parse("DuploJS");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const resultWithError = DPE.string()
	.min(3)
	.parse("ok");

if (E.isLeft(resultWithError)) {
	const error = unwrap(resultWithError);
	// error: DataParserError
}

const numberSchema = DPE.coerce.number();
const numberResult = numberSchema.parse("42");
if (E.isRight(numberResult)) {
	const value = unwrap(numberResult);
	// value: number
}
