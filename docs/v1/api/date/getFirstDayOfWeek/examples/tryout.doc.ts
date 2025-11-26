import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-06-19");
const result = DDate.getFirstDayOfWeek(input);
// result: "date1718668800000+" (lundi 17 juin 2024)
