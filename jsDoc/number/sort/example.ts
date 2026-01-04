import { N, pipe } from "@scripts";

N.sort(
	[3, 1, 2],
	"ASC",
); // [1, 2, 3]

pipe(
	[3, 1, 2],
	N.sort("DSC"),
); // [3, 2, 1]

N.sort(
	[1, 2, 3],
	"DSC",
); // [3, 2, 1]
