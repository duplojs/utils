import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.subtractMinutes(input, 15);
// result: "date1718840700000+"
