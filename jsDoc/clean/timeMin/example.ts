import { C, D } from "@scripts";

const smallest = C.timeMin([
	C.Time.createOrThrow(D.createTheTime(1_000)),
	D.createTheTime(500),
	D.createTheTime(2_000),
]);
// smallest: C.Time

const fromRaw = C.timeMin([
	D.createTheTime(10),
	D.createTheTime(5),
	D.createTheTime(20),
]);
// fromRaw: C.Time

const mixed = C.timeMin([
	C.Time.createOrThrow(D.createTheTime(100)),
	D.createTheTime(50),
]);
// mixed: C.Time
