import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["Hello", "Good", "Best"];
const result = pipe(
	input,
	DArray.map(DString.concat(" day")),
	DArray.join(" | "),
);
// result: "Hello day | Good day | Best day"
