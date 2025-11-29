import { D } from "@duplojs/utils";

const input = D.create("2024-06-17");
const result = D.getDayOfWeek(input);
// result: 1

const result2 = D.getDayOfWeek(input, "Europe/London");
// result2: 1
