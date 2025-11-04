import { DArray } from "@duplojs/utils";

const input = [1, 2, 3, 4, 5] as const;

const result = DArray.includes(input, 3);
// result: true
