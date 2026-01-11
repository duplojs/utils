import { S, pipe } from "@scripts";

S.test("DuploJS", /JS$/); // true

pipe(
	"DuploTS",
	S.test(/JS$/),
); // false

S.test("alpha", /ph/); // true
