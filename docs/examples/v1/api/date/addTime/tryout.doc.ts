import { D } from "@duplojs/utils";

const baseDate = "date1000+";
const extraTime = "time2500+";
const resultDate = D.addTime(baseDate, extraTime);
// resultDate: TheDate

const baseTime = "time1000+";
const resultTime = D.addTime(baseTime, "time500-");
// resultTime: TheTime
