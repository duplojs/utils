import { C, D, pipe } from "@scripts";

const date = C.Date.createOrThrow(D.create("2024-03-01"));
const threshold = D.create("2024-02-29");

const result = C.dateGreaterThan(date, threshold);
// result: true

pipe(
	date,
	C.dateGreaterThan(threshold),
); // true
