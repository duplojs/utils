import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["duplojs", "django", "laravel", "nextjs"];
const result = pipe(
	input,
	DArray.filter(DString.includes("js")),
);
// result: ["duplojs", "nextjs"]
