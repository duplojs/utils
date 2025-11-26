import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.subtractSeconds(input, 30);
// result: "date1718841570000+"
