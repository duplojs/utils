import { D, pipe } from "@scripts";

const input = 1_700_000_000_000;
const result = D.isSafeTimestamp(input);
// result: true

const input2 = 9_000_000_000_000_000;
const result2 = D.isSafeTimestamp(input2);
// result2: false

pipe(
	input,
	D.isSafeTimestamp,
); // result: true
