import { A, falsy } from "@scripts";

const values = [
	0,
	1,
	2,
	"",
	"toto",
	null,
] as const;

const result = A.filter(values, falsy);

// type: (0 | "" | null)[]
