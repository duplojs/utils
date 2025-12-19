import { D } from "@duplojs/utils";

const input = D.create("2024-06-20");
const result = D.getMinute(input);
// result: 0

const result2 = D.getMinute(input, "Europe/Madrid");
// result2: 0
