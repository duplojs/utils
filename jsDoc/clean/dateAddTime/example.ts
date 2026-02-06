import { C, D, pipe } from "@scripts";

const date = C.Date.createOrThrow(D.create("2024-01-01"));
const oneHour = C.Time.createOrThrow(D.createTime(1, "hour"));

const later = C.dateAddTime(date, oneHour);
// later: C.Date

const curried = pipe(
	date,
	C.dateAddTime(D.createTime(1, "minute")),
);
// curried: C.Date

const mixed = C.dateAddTime(date, D.createTime(500, "millisecond"));
// mixed: C.Date
