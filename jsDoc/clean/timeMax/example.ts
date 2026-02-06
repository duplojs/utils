import { C, D } from "@scripts";

const largest = C.timeMax([
	C.Time.createOrThrow(D.createTime(1_000, "millisecond")),
	D.createTime(500, "millisecond"),
	D.createTime(2_000, "millisecond"),
]);
// largest: C.Time

const mixed = C.timeMax([
	C.Time.createOrThrow(D.createTime(100, "millisecond")),
	D.createTime(50, "millisecond"),
]);
// mixed: C.Time
