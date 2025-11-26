import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.getMinute(input);
// result: 0

const result2 = DDate.getMinute(input, "Europe/Madrid");
// result2: 0
