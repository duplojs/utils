import { D, pipe } from "@scripts";

const date = D.create("2024-06-20");
const time = D.createTime(1, "hour");

const result = D.addTime(date, time);
// result: TheDate

const result2 = D.addTime(time, D.createTime(30, "minute"));
// result2: TheTime

pipe(
	date,
	D.addTime(D.createTime(15, "minute")),
); // TheDate
