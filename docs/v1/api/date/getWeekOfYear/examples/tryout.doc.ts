import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-01-04");
const result = DDate.getWeekOfYear(input, "Europe/Berlin");
// result: 1
