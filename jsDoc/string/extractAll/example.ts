import { A, S, pipe } from "@scripts";

pipe(
	"id=1; id=2",
	S.extractAll(/id=(\d+)/g),
	A.from,
); // [{ ... }, { ... }]

S.extractAll("hello", /\d+/g); // Generator

pipe(
	"a1b2",
	S.extractAll(/(\d)/g),
	A.from,
	A.map((value) => value.matchedValue),
); // ["1", "2"]
