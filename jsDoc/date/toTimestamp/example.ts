import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.toTimestamp(input);
// result: 1718841600000

pipe(
	input,
	D.toTimestamp,
); // result: 1718841600000
