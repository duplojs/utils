import { DP } from "@scripts";

const checker = DP.checkerStringMin(3);

const withMessage = checker.addErrorMessage("string.too-short");

const parser = DP.string()
	.addChecker(withMessage);

const result = parser.parse("id");

const originalParser = DP.string().addChecker(checker);
