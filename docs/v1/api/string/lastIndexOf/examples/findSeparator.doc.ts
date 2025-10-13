import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["duplojs-framework", "nestjs-app", "express-server"];
const result = pipe(
	input,
	DArray.map(DString.lastIndexOf("-")),
	DArray.filter((index) => index !== undefined),
);
// result: [7, 6, 7]
