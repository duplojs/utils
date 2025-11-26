import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20", {
	hour: "12",
	minute: "34",
	second: "56",
	millisecond: "789",
});
const result = DDate.round(input);
// result: "date1718841600000+"

const result2 = DDate.round(input, "month");
// result2: "date1717200000000+"
