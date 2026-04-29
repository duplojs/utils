import { A, DDate, pipe, type ExpectType } from "@scripts";

const primitiveDuplicates = A.findDuplicates(["apple", "banana", "apple", "banana", "pear"]);
// primitiveDuplicates: ["apple", "banana"]

const dateValue = DDate.create("2024-01-01");
const timeValue = DDate.createTime(90, "minute");
const dateAndTimeDuplicates = A.findDuplicates([
	dateValue,
	DDate.create("2024-01-01"),
	timeValue,
	DDate.createTime(90, "minute"),
]);
// dateAndTimeDuplicates: [dateValue, timeValue]

const pipedDuplicates = pipe(
	[true, false, true, false],
	A.findDuplicates,
);

type check = ExpectType<
	typeof pipedDuplicates,
	undefined | readonly [boolean, ...boolean[]],
	"strict"
>;
