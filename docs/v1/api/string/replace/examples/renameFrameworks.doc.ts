import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["duplojs", "nestjs", "expressjs"];
const result = pipe(
	input,
	DArray.map(DString.replace("js", "framework")),
	DArray.join(" + "),
);
// result: "duploframework + nestframework + expressframework"
