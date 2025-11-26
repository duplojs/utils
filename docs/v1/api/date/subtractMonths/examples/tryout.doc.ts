import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-30");
const result = DDate.subtractMonths(input, 2);
// result: "date1711843200000+"
