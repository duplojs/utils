import { D } from "@scripts";

const rounded = D.makeSafeTimeValue(1.2);
// rounded: 1

const fromNaN = D.makeSafeTimeValue(Number.NaN);
// fromNaN: 0

const clamped = D.makeSafeTimeValue(Infinity);
// clamped: 9007199254740991
