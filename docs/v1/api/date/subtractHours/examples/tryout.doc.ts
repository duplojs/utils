import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.subtractHours(input, 6);
// result: "date1718820000000+"
