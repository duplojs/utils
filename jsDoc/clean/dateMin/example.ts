import { C, D } from "@scripts";

const earliest = C.dateMin([
	C.Date.createOrThrow(D.create("2024-03-01")),
	D.create("2024-02-01"),
	D.create("2024-04-01"),
]);
// earliest: C.Date

const fromRaw = C.dateMin([
	D.create("2024-01-05"),
	D.create("2024-01-03"),
	D.create("2024-01-10"),
]);
// fromRaw: C.Date

const mixed = C.dateMin([
	C.Date.createOrThrow(D.create("2024-01-08")),
	D.create("2024-01-07"),
]);
// mixed: C.Date
