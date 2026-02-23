import { D, pipe } from "@scripts";

const dateInput = D.create("2024-06-20");
const nativeDate = D.toNative(dateInput);
// nativeDate: Date

const nativeDate2 = D.toNative("date1718841600000+");
// nativeDate2: Date

const timeInput = D.createTime(90000, "millisecond");
const timeValue = D.toNative(timeInput);
// timeValue: number

const timeValue2 = D.toNative("time3600000-");
// timeValue2: number

pipe(
	timeInput,
	D.toNative,
); // number
