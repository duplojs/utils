import { D } from "@scripts";

const result = D.makeSafeTimestamp(1_700_000_000_000.4);
// result: 1700000000000

const result2 = D.makeSafeTimestamp(Number.NaN);
// result2: 0

const result3 = D.makeSafeTimestamp(8_640_000_000_000_500);
// result3: 8640000000000000
