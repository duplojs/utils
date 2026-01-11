import { DPE, E, unwrap } from "@scripts";

const parser = DPE.email();
const result = parser.parse("a@b.com");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const withMessage = DPE.email({ errorMessage: "email.format-invalid" });
const messageResult = withMessage.parse("a@b.com");
