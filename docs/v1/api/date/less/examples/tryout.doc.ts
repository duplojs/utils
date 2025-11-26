import { DDate } from "@duplojs/utils";

const threshold = DDate.create("2024-06-20");
const input = DDate.create("2024-05-01");

const result = DDate.less(input, threshold);
// result: true
