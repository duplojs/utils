import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.subtractYears(input, 1);
// result: "date1687219200000+"
