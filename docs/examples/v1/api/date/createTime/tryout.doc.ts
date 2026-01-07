import { D } from "@duplojs/utils";

const timeFromUnit = D.createTime(2, "second");
// timeFromUnit: "time2000+"

// Either<"time-created", TheTime>
const maybeFromSpooling = D.createTime({
	hour: 1,
	minute: 30,
	second: 15,
});

// Either<"time-created", TheTime>
const maybeFromIso = D.createTime({
	value: "01:02:03.004",
});

// Either<"time-created", TheTime>
const maybeFromValue = D.createTime(-500);

const fromTheTime = D.createTime("time250+");
// fromTheTime: "time250+"
