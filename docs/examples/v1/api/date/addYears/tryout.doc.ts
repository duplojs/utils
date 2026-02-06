import { D } from "@duplojs/utils";

const input = D.create("2020-02-29");
const result = D.addYears(input, 4);
// result: TheDate

const addOneYear = D.addYears(1);
const result2 = addOneYear(input);
// result2: TheDate
