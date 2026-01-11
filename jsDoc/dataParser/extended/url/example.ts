import { DPE, E, unwrap } from "@scripts";

const parser = DPE.url();
const result = parser.parse("https://example.com");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const withMessage = DPE.url({ errorMessage: "url.format-invalid" });
const messageResult = withMessage.parse("https://example.com");
