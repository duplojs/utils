import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-19");
const result = DDate.getLastDayOfWeek(input);
// result: "date1719187200000+" (dimanche 23 juin 2024)
