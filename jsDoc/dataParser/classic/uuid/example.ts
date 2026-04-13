import { DP } from "@scripts";

const parser = DP.uuid();

const valid = parser.parse("8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b");
// valid: Error<DP.DataParserError> | Success<string>

const invalid = parser.parse("invalid-value");
// invalid: Error<DP.DataParserError> | Success<string>

const withMessage = DP.uuid({ errorMessage: "string.uuid" });
withMessage.parse("8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b");
