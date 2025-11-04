import { DArray } from "@duplojs/utils";

const input = [10, 20, 30, 20, 40];

const result1 = DArray.lastIndexOf(input, 20);
// result1: 3

const result2 = DArray.lastIndexOf(input, 20, 2);
// result2: 1

const result3 = DArray.lastIndexOf(input, 100);
// result3: undefined

const findLast20 = DArray.lastIndexOf(20);
const result4 = findLast20(input);
// result4: 3
