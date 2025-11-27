import { A, DString, pipe } from "@duplojs/utils";

const input = ["duplojs v1.2.3", "nestjs v2.0.1", "express"];
const result = pipe(
	input,
	A.map(DString.match(/v(\d+\.\d+\.\d+)/)),
	A.filter((value) => value !== undefined),
	A.map(A.last),
	A.filter((value) => value !== undefined),
);
// result: ["1.2.3", "2.0.1"]
