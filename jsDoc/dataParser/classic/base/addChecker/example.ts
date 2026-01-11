import { DP } from "@scripts";

const withMin = DP.string()
	.addChecker(DP.checkerStringMin(3));

const withRange = DP.string()
	.addChecker(
		DP.checkerStringMin(3),
		DP.checkerStringMax(10),
	);

const withRefine = DP.string()
	.addChecker(DP.checkerRefine((value) => value.startsWith("id:")));
