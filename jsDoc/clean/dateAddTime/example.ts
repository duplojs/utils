import { C, D, pipe } from "@scripts";

const date = C.Date.createOrThrow(D.create("2024-01-01"));
const oneHour = C.Time.createOrThrow(D.createTheTime(3_600_000));

const later = C.dateAddTime(date, oneHour);
// later: C.Date

const curried = pipe(
	date,
	C.dateAddTime(D.createTheTime(60_000)),
);
// curried: C.Date

const mixed = C.dateAddTime(
	C.Date.createOrThrow(D.create("2024-01-02")),
	D.createTheTime(500),
);
// mixed: C.Date
