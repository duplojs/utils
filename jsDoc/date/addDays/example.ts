import { D, pipe } from "@scripts";

const input = D.create("2024-06-15");
const result = D.addDays(input, 5);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.addDays(5),
); // TheDate
