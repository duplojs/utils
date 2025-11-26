import { DArray, DDate } from "@duplojs/utils";

const input = {
	start: DDate.create("2024-06-01"),
	end: DDate.create("2024-06-03"),
} as const;

const iterator = DDate.each(input);
const result = DArray.from(iterator);
// result: ["date1717200000000+", "date1717286400000+", "date1717372800000+"]
