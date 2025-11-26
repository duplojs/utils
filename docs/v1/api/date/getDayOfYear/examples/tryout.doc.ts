import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-12-31");
const result = DDate.getDayOfYear(input, "Australia/Sydney");
// result: 366
