import { D, pipe } from "@scripts";

const timeFromUnit = D.createTime(90, "minute");
// timeFromUnit: "time5400000+"

const mayBeTime = D.createTime({
	hour: 1,
	minute: 15,
});
// Either<"time-created", TheTime>

const mayBeIso = D.createTime({
	value: "+01:30:00",
});
// Either<"time-created", TheTime>

const piped = pipe(
	120,
	D.createTime,
);
// piped: Either<"time-created", TheTime>
