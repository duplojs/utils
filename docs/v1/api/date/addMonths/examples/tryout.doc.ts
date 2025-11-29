import { D } from "@duplojs/utils";

const input = D.create("2024-01-31");
const result = D.addMonths(input, 1);
// result: "date1709251200000+" (29 février 2024)

const addQuarter = D.addMonths(3);
const result2 = addQuarter(input);
// result2: "date1719782400000+" (30 avril 2024)
