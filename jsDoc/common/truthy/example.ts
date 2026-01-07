import { A, truthy } from "@scripts";

const values = [
	0,
	1,
	2,
	"",
	"toto",
	null,
] as const;

const result = A.filter(values, truthy);

// type: (1 | 2 | "toto")[]
