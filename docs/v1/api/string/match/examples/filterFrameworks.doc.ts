import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["duplojs v1.2.3", "nestjs v2.0.1", "express"];
const result = pipe(
	input,
	DArray.map(DString.match(/v(\d+\.\d+\.\d+)/)),
	DArray.filter((value) => value !== undefined),
	DArray.map(DArray.last),
	DArray.filter((value) => value !== undefined),
);
// result: ["1.2.3", "2.0.1"]
