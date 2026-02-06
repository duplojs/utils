import { D } from "@scripts";

const ok = D.isSafeTimeValue(1_500);
// ok: true

const nan = D.isSafeTimeValue(Number.NaN);
// nan: false

const tooLarge = D.isSafeTimeValue(9_007_199_254_740_992);
// tooLarge: false
