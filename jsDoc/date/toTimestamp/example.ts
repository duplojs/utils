import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const timestamp = D.toTimestamp(input);
// timestamp: number

const timestamp2 = D.toTimestamp("date1718841600000+");
// timestamp2: number

pipe(
	input,
	D.toTimestamp,
); // number
