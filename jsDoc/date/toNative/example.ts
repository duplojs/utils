import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const nativeDate = D.toNative(input);
// nativeDate: Date

const nativeDate2 = D.toNative("date1718841600000+");
// nativeDate2: Date

pipe(
	input,
	D.toNative,
); // Date
