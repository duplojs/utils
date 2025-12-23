import { D } from "@duplojs/utils";

const input = D.create("2020-02-29");
const result = D.addYears(input, 4);
// result: "date1766707200000+" (29 february 2024)

const addOneYear = D.addYears(1);
const result2 = addOneYear(input);
// result2: "date1646006400000+" (28 february 2023)
