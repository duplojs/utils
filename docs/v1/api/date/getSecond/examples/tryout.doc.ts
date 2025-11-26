import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.getSecond(input);
// result: 0

const result2 = DDate.getSecond(input, "Asia/Seoul");
// result2: 0
