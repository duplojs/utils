import { DP } from "@scripts";

const parser = DP.string();

const withMessage = parser.addErrorMessage("string.invalid");

const result = withMessage.parse(123);

const originalResult = parser.parse(123);

const checkerMessage = DP.string()
	.addChecker(DP.checkerStringMin(3))
	.addErrorMessage("string.too-short");
