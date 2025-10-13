import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["duplojs", "nestjs", "express"];
const result = pipe(
	input,
	DArray.map(DString.indexOf("js")),
	DArray.filter((value) => value !== undefined),
);
// result: [5, 4]
