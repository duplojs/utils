import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.subtractMilliseconds(input, 500);
// result: "date1718841599500+"
