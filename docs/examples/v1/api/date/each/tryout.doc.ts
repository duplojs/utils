import { A, D } from "@duplojs/utils";

const input = {
	start: D.create("2024-06-01"),
	end: D.create("2024-06-03"),
} as const;

const iterator = D.each(input);
const result = A.from(iterator);
// result: TheDate[]
