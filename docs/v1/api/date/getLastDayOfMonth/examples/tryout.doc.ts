import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-19");
const result = DDate.getLastDayOfMonth(input);
// result: "date1719532800000+" (30 June 2024)
