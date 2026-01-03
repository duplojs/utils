import { A, pipe } from "@scripts";

A.reduceRight(
	[1, 2, 3],
	"",
	({ element, lastValue, next }) => next(`${lastValue}${element}`),
); // "321"

pipe(
	["a", "b", "c"],
	A.reduceRight("", ({ element, lastValue, next }) => next(`${lastValue}${element}`)),
); // "cba"

A.reduceRight(
	[1, 2, 3],
	0,
	({ element, lastValue, next }) => next(lastValue + element),
); // 6
