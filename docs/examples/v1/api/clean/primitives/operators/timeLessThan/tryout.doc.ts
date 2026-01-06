import { C, D } from "@duplojs/utils";

const rawInput = D.createTime(1000);
const input = C.Time.createOrThrow(rawInput);

const rawThreshold = D.createTime(5000);
const threshold = C.Time.createOrThrow(rawThreshold);

if (C.timeLessThan(input, threshold)) {
	// ...
} else {
	// ...
}
