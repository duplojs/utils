import { DP } from "@scripts";

const checker = DP.checkerStringMin(3, {
	errorMessage: "string.too-short",
});

const clone = checker.clone();

const parser = DP.string()
	.addChecker(clone);
