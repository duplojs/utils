import { D, pipe } from "@scripts";

const input = D.create("2024-06-03");
const result = D.addWeeks(input, 2);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.addWeeks(2),
); // TheDate
