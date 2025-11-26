import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.getHour(input);
// result: 0

const result2 = DDate.getHour(input, "America/Los_Angeles");
// result2: 17
