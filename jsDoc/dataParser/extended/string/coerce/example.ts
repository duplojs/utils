import { DPE, E, unwrap } from "@scripts";

const parser = DPE.string().coerce();
const result = parser.parse(42);
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const withMin = DPE.string()
	.min(2)
	.coerce();
const minResult = withMin.parse(42);

const withRegex = DPE.string()
	.regex(/^\d+$/)
	.coerce();
const regexResult = withRegex.parse(42);
