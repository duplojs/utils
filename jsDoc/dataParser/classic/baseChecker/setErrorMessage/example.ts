import { DP } from "@scripts";

const checker = DP.checkerStringMin(3);

checker.setErrorMessage("string.too-short");

const parser = DP.string()
	.addChecker(checker);

const result = parser.parse("id");

const sameChecker = checker.setErrorMessage("string.min");
