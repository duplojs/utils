import { DDate } from "@duplojs/utils";

const threshold = DDate.create("2024-06-20");
const input = DDate.create("2024-06-20");

const predicate = DDate.greaterThan(input, threshold);
// result: true
