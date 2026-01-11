import { C, D } from "@scripts";

const date = C.Date.createOrThrow(D.create("2024-02-29"));
const threshold = D.create("2024-03-01");

if (C.dateLessThan(date, threshold)) {
	// date is before threshold
}
