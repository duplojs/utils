import { DDate } from "@duplojs/utils";

const input = DDate.create("2024-01-31");
const result = DDate.addMonths(input, 1);
// result: "date1709251200000+" (29 février 2024)

const addQuarter = DDate.addMonths(3);
const result2 = addQuarter(input);
// result2: "date1719782400000+" (30 avril 2024)
