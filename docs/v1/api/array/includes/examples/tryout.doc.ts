import { A } from "@duplojs/utils";

const input = [1, 2, 3, 4, 5] as const;

const result = A.includes(input, 3);
// result: true
