import { DP } from "@scripts";

const parser = DP.string();

parser.setErrorMessage("string.invalid");

const result = parser.parse(123);

const sameParser = parser.setErrorMessage("string.expected");

const checkerMessage = DP.string()
	.addChecker(DP.checkerStringMin(3))
	.setErrorMessage("string.too-short");
