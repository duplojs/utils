import { A } from "@duplojs/utils";

const input = [10, 20, 30, 20, 40];

const result1 = A.lastIndexOf(input, 20);
// result1: 3

const result2 = A.lastIndexOf(input, 20, 2);
// result2: 1

const result3 = A.lastIndexOf(input, 100);
// result3: undefined
