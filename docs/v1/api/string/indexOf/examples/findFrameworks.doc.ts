import { A, DString, pipe } from "@duplojs/utils";

const input = ["duplojs", "nestjs", "express"];
const result = pipe(
	input,
	A.map(DString.indexOf("js")),
	A.filter((value) => value !== undefined),
);
// result: [5, 4]
