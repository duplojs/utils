import { C, D, pipe } from "@scripts";

const date = C.Date.createOrThrow(D.create("2024-01-02"));
const halfMinute = C.Time.createOrThrow(D.createTime(30, "second"));

const earlier = C.dateSubtractTime(date, halfMinute);
// earlier: C.Date

const curried = pipe(
	date,
	C.dateSubtractTime(D.createTime(1, "second")),
);
// curried: C.Date

const mixed = C.dateSubtractTime(date, D.createTime(500, "millisecond"));
// mixed: C.Date
