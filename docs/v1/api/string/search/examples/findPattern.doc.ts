import { A, DString, pipe } from "@duplojs/utils";

const input = ["duplojs", "nestjs", "express"];
const result = pipe(
	input,
	A.map(DString.search("js")),
	A.filter((index) => index !== undefined),
);
// result: [5, 4]
