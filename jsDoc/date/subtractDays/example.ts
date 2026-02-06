import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractDays(input, 3);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.subtractDays(3),
); // TheDate
