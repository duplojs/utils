import { DP } from "@scripts";

const base = DP.string();
const cloned = base.clone();

const withMin = DP.string()
	.addChecker(DP.checkerStringMin(3));

const withMinClone = withMin.clone();

const coerceNumber = DP.coercer(DP.number());
const coerceNumberClone = coerceNumber.clone();
