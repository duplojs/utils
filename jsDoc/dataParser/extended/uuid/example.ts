import { DPE, E, unwrap } from "@scripts";

const parser = DPE.uuid();
const result = parser.parse("8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b");
if (E.isRight(result)) {
	const value = unwrap(result);
	// value: string
}

const withMessage = DPE.uuid({ errorMessage: "string.uuid" });
const messageResult = withMessage.parse("invalid-value");
