import { A, type ExpectType } from "@duplojs/utils";

const input = [10, 20, 30, 40, 50] as const;

const result = A.at(input, 2);

type check = ExpectType<
	typeof result,
	30,
	"strict"
>;
