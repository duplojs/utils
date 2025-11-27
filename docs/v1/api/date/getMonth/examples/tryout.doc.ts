import { D } from "@duplojs/utils";

const input = D.create("2024-12-31");
const result = D.getMonth(input);
// result: 12

const result2 = D.getMonth(input, "Asia/Tokyo");
// result2: 12
