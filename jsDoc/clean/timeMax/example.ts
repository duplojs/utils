import { C, D } from "@scripts";

const largest = C.timeMax([
	C.Time.createOrThrow(D.createTheTime(1_000)),
	D.createTheTime(500),
	D.createTheTime(2_000),
]);
// largest: C.Time

const fromRaw = C.timeMax([
	D.createTheTime(10),
	D.createTheTime(5),
	D.createTheTime(20),
]);
// fromRaw: C.Time

const mixed = C.timeMax([
	C.Time.createOrThrow(D.createTheTime(100)),
	D.createTheTime(50),
]);
// mixed: C.Time
