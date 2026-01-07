import { D } from "@scripts";

const result = D.isSafeTimeValue(1_500);
// result: true

const result2 = D.isSafeTimeValue(Number.NaN);
// result2: false

const result3 = D.isSafeTimeValue(9_007_199_254_740_992);
// result3: false
