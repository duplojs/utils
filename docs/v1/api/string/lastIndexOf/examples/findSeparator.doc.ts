import { A, DString, pipe } from "@duplojs/utils";

const input = ["duplojs-framework", "nestjs-app", "express-server"];
const result = pipe(
	input,
	A.map(DString.lastIndexOf("-")),
	A.filter((index) => index !== undefined),
);
// result: [7, 6, 7]
