import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-12-31");
const result = DDate.getMonth(input);
// result: 12

const result2 = DDate.getMonth(input, "Asia/Tokyo");
// result2: 12
