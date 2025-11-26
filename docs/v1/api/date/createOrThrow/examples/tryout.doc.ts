import { DDate } from "@duplojs/utils";

const input = 1_700_000_000_000;
const result = DDate.createOrThrow(input);
// result: "date1700000000000+"

const input2 = result;
const result2 = DDate.createOrThrow(input2);
// result2: "date1700000000000+"

const input3 = new Date("2024-06-20T12:00:00Z");
const result3 = DDate.createOrThrow(input3);
// result3: "date1718884800000+"
