import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.addMilliseconds(input, 10);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.addMilliseconds(10),
); // TheDate
