import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-30");
const result = DDate.subtractWeeks(input, 4);
// result: "date1716076800000+"
