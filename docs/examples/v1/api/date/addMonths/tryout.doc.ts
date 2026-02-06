import { D } from "@duplojs/utils";

const input = D.create("2024-01-31");
const result = D.addMonths(input, 1);
// result: TheDate

const addQuarter = D.addMonths(3);
const result2 = addQuarter(input);
// result2: TheDate
