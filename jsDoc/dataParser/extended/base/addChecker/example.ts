import { DP, DPE } from "@scripts";

const withMin = DPE.string()
	.addChecker(DP.checkerStringMin(3));

const withRange = DPE.string()
	.addChecker(
		DP.checkerStringMin(3),
		DP.checkerStringMax(10),
	);

const withRefine = DPE.string()
	.addChecker(DP.checkerRefine((value) => value.startsWith("id:")));
