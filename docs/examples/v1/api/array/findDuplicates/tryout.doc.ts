import { A, DDate, pipe, type ExpectType } from "@duplojs/utils";

const primitiveResult = A.findDuplicates(["apple", "banana", "apple", "banana", "pear"]);
// ["apple", "banana"]

const dateValue = DDate.create("2024-01-01");
const timeValue = DDate.createTime(90, "minute");
const dateAndTimeResult = A.findDuplicates([
	dateValue,
	DDate.create("2024-01-01"),
	timeValue,
	DDate.createTime(90, "minute"),
]);
// [dateValue, timeValue]

const pipedResult = pipe(
	[true, false, true, false],
	A.findDuplicates,
);

type check = ExpectType<
	typeof pipedResult,
	undefined | readonly [boolean, ...boolean[]],
	"strict"
>;
