import { D } from "@duplojs/utils";

const dateInput = D.create("2024-06-20");
const timeInput = D.createTime(3600000);

const dateResult = D.toTimestamp(dateInput);
const timeResult = D.toTimestamp(timeInput);
// dateResult: 1718841600000
// timeResult: 3600000
