import { C, D, pipe } from "@scripts";

const duration = C.Time.createOrThrow(D.createTime(1, "hour"));
const threshold = D.createTime(2, "hour");

const result = C.timeLessThan(duration, threshold);
// result: true

pipe(
	duration,
	C.timeLessThan(threshold),
); // true
