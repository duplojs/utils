import { D, pipe } from "@scripts";

const input = D.create("2024-06-30");
const result = D.subtractMonths(input, 2);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.subtractMonths(2),
); // TheDate
