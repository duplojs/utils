import { C, D } from "@duplojs/utils";

const rawInput = D.create("2024-01-10");
const input = C.Date.createOrThrow(rawInput);

const rawThreshold = D.create("2024-01-01");
const threshold = C.Date.createOrThrow(rawThreshold);

if (C.dateGreaterThan(input, threshold)) {
	// ...
} else {
	// ...
}
