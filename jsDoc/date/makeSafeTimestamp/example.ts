import { D } from "@scripts";

const rounded = D.makeSafeTimestamp(1_700_000_000_000.4);
// rounded: 1700000000000

const fromNaN = D.makeSafeTimestamp(Number.NaN);
// fromNaN: 0

const clamped = D.makeSafeTimestamp(8_640_000_000_000_500);
// clamped: 8640000000000000
