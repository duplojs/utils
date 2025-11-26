import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-01");
const result = DDate.getDayOfMonth(input);
// result: 1

const result2 = DDate.getDayOfMonth(input, "America/New_York");
// result2: 1
