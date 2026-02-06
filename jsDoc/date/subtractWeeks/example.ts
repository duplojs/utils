import { D, pipe } from "@scripts";

const input = D.create("2024-06-30");
const result = D.subtractWeeks(input, 4);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.subtractWeeks(4),
); // TheDate
