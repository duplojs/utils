import { D } from "@duplojs/utils";

const input = D.create("2024-06-20");
const result = D.getSecond(input);
// result: 0

const result2 = D.getSecond(input, "Asia/Seoul");
// result2: 0
