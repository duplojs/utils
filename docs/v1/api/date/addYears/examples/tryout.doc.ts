import { DDate } from "@duplojs/utils";

const input = DDate.create("2020-02-29");
const result = DDate.addYears(input, 4);
// result: "date1766707200000+" (29 février 2024)

const addOneYear = DDate.addYears(1);
const result2 = addOneYear(input);
// result2: "date1646006400000+" (28 février 2023)
