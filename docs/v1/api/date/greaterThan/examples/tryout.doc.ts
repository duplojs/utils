import { D } from "@duplojs/utils";

const threshold = D.create("2024-06-20");
const input = D.create("2024-06-20");

const predicate = D.greaterThan(input, threshold);
// result: true
