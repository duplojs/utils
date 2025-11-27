import { A, DString, pipe } from "@duplojs/utils";

const input = ["duplojs", "django", "laravel", "nextjs"];
const result = pipe(
	input,
	A.filter(DString.includes("js")),
);
// result: ["duplojs", "nextjs"]
