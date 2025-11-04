import { DArray } from "@duplojs/utils";

const input = [10, 20, 30, 20, 40] as const;

const result = DArray.indexOf(input, 20);
// result: 1

const result2 = DArray.indexOf(input, 20, 2);
// result2: 3

