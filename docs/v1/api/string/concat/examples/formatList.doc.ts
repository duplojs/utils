import { A, DString, pipe } from "@duplojs/utils";

const input = ["Hello", "Good", "Best"];
const result = pipe(
	input,
	A.map(DString.concat(" day")),
	A.join(" | "),
);
// result: "Hello day | Good day | Best day"
