import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractSeconds(input, 30);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.subtractSeconds(30),
); // TheDate
