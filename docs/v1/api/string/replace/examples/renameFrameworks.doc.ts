import { A, DString, pipe } from "@duplojs/utils";

const input = ["duplojs", "nestjs", "expressjs"];
const result = pipe(
	input,
	A.map(DString.replace("js", "framework")),
	A.join(" + "),
);
// result: "duploframework + nestframework + expressframework"
