import { D } from "@scripts";

const result = D.makeSafeTimeValue(1.2);
// result: 1

const result2 = D.makeSafeTimeValue(Number.NaN);
// result2: 0

const result3 = D.makeSafeTimeValue(Infinity);
// result3: 9007199254740991
