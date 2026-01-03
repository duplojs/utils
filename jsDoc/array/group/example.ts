import { A, pipe } from "@scripts";

A.group(
	[1, 2, 3],
	(value, { output }) => output(value % 2 ? "odd" : "even", value),
);
// { even: [2], odd: [1, 3] }

pipe(
	["alpha", "beta"],
	A.group((value, { output }) => output("len", value.length)),
); // { len: [5, 4] }

A.group(
	[true, false],
	(_value, { output }) => output("flag", true),
);
// { flag: [true, true] }
