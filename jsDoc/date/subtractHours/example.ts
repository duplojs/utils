import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractHours(input, 6);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.subtractHours(6),
); // TheDate
