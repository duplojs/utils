import { D, pipe } from "@scripts";

const date = D.createTheDate(0);
const time = D.createTheTime(3_600_000);

const result = D.addTime(date, time);
// result: "date3600000+"

const result2 = D.addTime("time3000+", "time2000+");
// result2: "time5000+"

const result3 = pipe(
	date,
	D.addTime("time1000+"),
);
// result3: "date3601000+"
