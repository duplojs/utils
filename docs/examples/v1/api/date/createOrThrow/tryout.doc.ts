import { D } from "@duplojs/utils";

const input = 1_700_000_000_000;
const result = D.createOrThrow(input);
// result: TheDate

const input2 = result;
const result2 = D.createOrThrow(input2);
// result2: TheDate

const input3 = new Date("2024-06-20T12:00:00Z");
const result3 = D.createOrThrow(input3);
// result3: TheDate
