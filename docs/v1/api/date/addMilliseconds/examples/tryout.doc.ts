import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-20");
const result = DDate.addMilliseconds(input, 10);
// result: "date1718841600010+"
