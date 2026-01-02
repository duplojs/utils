import { A, falsy, type ExpectType } from "@duplojs/utils";

const values = [
	0,
	1,
	2,
	"",
	"toto",
	null,
] as const;

const result = A.filter(values, falsy);

type check = ExpectType<
	typeof result,
	(0 | "" | null)[],
	"strict"
>;
