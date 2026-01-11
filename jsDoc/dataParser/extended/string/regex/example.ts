import { DPE, E, unwrap } from "@scripts";

const parser = DPE.string().regex(/^[A-Z][a-z]+$/);
const result = parser.parse("Duplo");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const withMessage = DPE.string().regex(/^[a-z-]+$/, { errorMessage: "string.bad-format" });
const messageResult = withMessage.parse("slug-value");

const chained = DPE.string().min(2).regex(/^ab/);
const chainedResult = chained.parse("ab");
