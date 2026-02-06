import { D } from "@scripts";

const theTime = D.createTime(2, "hour");
// theTime: TheTime

const timeValue = theTime.toNative();
// timeValue: number

const serialized = D.serialize(theTime);
// serialized: SerializedTheTime

const date = D.create("2025-10-20");
const dateWithDuration = D.addTime(date, theTime);
// dateWithDuration: TheDate

const threeHours = D.createTime(3, "hour");
// threeHours: TheTime

const asMilliseconds = D.toTimeValue(theTime);
// asMilliseconds: number
