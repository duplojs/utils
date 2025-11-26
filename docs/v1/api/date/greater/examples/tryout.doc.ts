import { DDate } from "@duplojs/utils";

const threshold = DDate.create("2024-06-01");
const input = DDate.create("2024-06-20");

const result = DDate.greater(input, threshold);
// result: true
