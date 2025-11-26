import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-19");
const result = DDate.getFirstDayOfMonth(input);
// result: "date1717200000000+" (1 June 2024)
