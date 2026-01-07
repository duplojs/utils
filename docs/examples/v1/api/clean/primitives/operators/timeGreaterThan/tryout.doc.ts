import { C, D } from "@duplojs/utils";

const rawInput = D.createTime(5000, "millisecond");
const input = C.Time.createOrThrow(rawInput);

const rawThreshold = D.createTime(1000, "millisecond");
const threshold = C.Time.createOrThrow(rawThreshold);

if (C.timeGreaterThan(input, threshold)) {
	// ...
} else {
	// ...
}
