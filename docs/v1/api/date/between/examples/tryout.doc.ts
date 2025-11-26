import { DDate } from "@duplojs/utils";

const start = DDate.create("2024-06-01");
const end = DDate.create("2024-06-30");
const input = DDate.create("2024-06-15");

const result = DDate.between(input, start, end);
// result: true
