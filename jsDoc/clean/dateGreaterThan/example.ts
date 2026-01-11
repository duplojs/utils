import { C, D } from "@scripts";

const date = C.Date.createOrThrow(D.create("2024-03-01"));
const threshold = D.create("2024-02-29");

if (C.dateGreaterThan(date, threshold)) {
	// date is after threshold
}
