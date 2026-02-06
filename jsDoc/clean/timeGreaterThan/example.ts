import { C, D, pipe } from "@scripts";

const duration = C.Time.createOrThrow(D.createTime(1, "hour"));
const threshold = D.createTime(30, "minute");

const result = C.timeGreaterThan(duration, threshold);
// result: true

pipe(
	duration,
	C.timeGreaterThan(threshold),
); // true
