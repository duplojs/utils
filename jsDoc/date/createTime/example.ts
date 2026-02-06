import { D, pipe } from "@scripts";

const direct = D.createTime(90, "minute");
// direct: TheTime

const mayBeFromSerialized = D.createTime("time5400000+");
// mayBeFromSerialized: Either<"time-created", TheTime>

const mayBeFromSpooling = D.createTime({
	value: "+01:30:00",
	minute: 15,
});
// mayBeFromSpooling: Either<"time-created", TheTime>

pipe(
	120,
	D.createTime,
); // Either<"time-created", TheTime>
