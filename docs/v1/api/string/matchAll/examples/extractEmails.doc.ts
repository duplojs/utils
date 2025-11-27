import { A, DString, pipe } from "@duplojs/utils";

const input = "Contact us at info@duplojs.com or support@duplojs.com for help";
const result = pipe(
	input,
	DString.matchAll(/\w+@\w+\.\w+/g),
	A.from,
	A.map(A.first),
	A.filter((value) => value !== undefined),
);
// result: ["info@duplojs.com", "support@duplojs.com"]
