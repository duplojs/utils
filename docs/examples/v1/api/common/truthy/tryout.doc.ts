import { A, truthy, type ExpectType } from "@duplojs/utils";

const values = [
	0,
	1,
	2,
	"",
	"toto",
	null,
] as const;

const result = A.filter(values, truthy);

type check = ExpectType<
	typeof result,
	(1 | 2 | "toto")[],
	"strict"
>;
