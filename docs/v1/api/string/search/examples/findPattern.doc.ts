import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["duplojs", "nestjs", "express"];
const result = pipe(
	input,
	DArray.map(DString.search("js")),
	DArray.filter((index) => index !== undefined),
);
// result: [5, 4]
