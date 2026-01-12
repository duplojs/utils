import { DPE, E, unwrap } from "@scripts";

const parser = DPE.string().min(3).max(10);
const result = parser.parse("DuploJS");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const withRegex = DPE.string().regex(/^[A-Z][a-z]+$/);
const regexResult = withRegex.parse("Duplo");

const coerceParser = DPE.coerce.string().min(2);
const coerceResult = coerceParser.parse(123);
