import { A } from "@duplojs/utils";

const input = [10, 20, 30, 20, 40] as const;

const result = A.indexOf(input, 20);
// result: 1

const result2 = A.indexOf(input, 20, 2);
// result2: 3

