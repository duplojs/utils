import { C, D, pipe } from "@scripts";

const date = C.Date.createOrThrow(D.create("2024-01-02"));
const halfMinute = C.Time.createOrThrow(D.createTheTime(30_000));

const earlier = C.dateSubtractTime(date, halfMinute);
// earlier: C.Date

const curried = pipe(
	date,
	C.dateSubtractTime(D.createTheTime(1_000)),
);
// curried: C.Date

const mixed = C.dateSubtractTime(
	C.Date.createOrThrow(D.create("2024-01-01")),
	D.createTheTime(500),
);
// mixed: C.Date
