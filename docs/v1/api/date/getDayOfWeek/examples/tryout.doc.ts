import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-17");
const result = DDate.getDayOfWeek(input);
// result: 1

const result2 = DDate.getDayOfWeek(input, "Europe/London");
// result2: 1
