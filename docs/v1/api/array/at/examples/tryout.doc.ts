import { DArray } from "@duplojs/utils";

const input = [10, 20, 30, 40, 50] as const;

const result1 = DArray.at(input, 2);
// result1: 30

