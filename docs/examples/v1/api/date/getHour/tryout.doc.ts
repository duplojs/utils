import { D } from "@duplojs/utils";

const input = D.create("2024-06-20");
const result = D.getHour(input);
// result: 0

const result2 = D.getHour(input, "America/Los_Angeles");
// result2: 17
