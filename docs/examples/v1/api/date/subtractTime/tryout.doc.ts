import { D } from "@duplojs/utils";

const baseDate = "date3000+";
const minusTime = "time1500+";
const resultDate = D.subtractTime(baseDate, minusTime);
// resultDate: TheDate

const baseTime = "time1000+";
const resultTime = D.subtractTime(baseTime, "time250-");
// resultTime: TheTime
