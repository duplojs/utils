import { D, pipe } from "@scripts";

const ok = D.isSafeTimestamp(1_700_000_000_000);
// ok: true

const tooLarge = D.isSafeTimestamp(9_000_000_000_000_000);
// tooLarge: false

pipe(
	1_700_000_000_000,
	D.isSafeTimestamp,
); // true
