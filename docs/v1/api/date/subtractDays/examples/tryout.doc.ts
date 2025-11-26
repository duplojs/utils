import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.subtractDays(input, 3);
// result: "date1718582400000+"
