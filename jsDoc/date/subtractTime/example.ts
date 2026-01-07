import { D, pipe } from "@scripts";

const date = D.createTheDate(0);
const time = D.createTheTime(3_600_000);

const result = D.subtractTime(date, time);
// result: "date3600000-"

const result2 = D.subtractTime("time5000+", "time2000+");
// result2: "time3000+"

const result3 = pipe(
	date,
	D.subtractTime("time1000+"),
);
// result3: "date3599000-"
