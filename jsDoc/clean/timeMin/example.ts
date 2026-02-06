import { C, D } from "@scripts";

const smallest = C.timeMin([
	C.Time.createOrThrow(D.createTime(1_000, "millisecond")),
	D.createTime(500, "millisecond"),
	D.createTime(2_000, "millisecond"),
]);
// smallest: C.Time

const mixed = C.timeMin([
	C.Time.createOrThrow(D.createTime(100, "millisecond")),
	D.createTime(50, "millisecond"),
]);
// mixed: C.Time
