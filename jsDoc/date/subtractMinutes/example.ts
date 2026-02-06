import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractMinutes(input, 15);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.subtractMinutes(15),
); // TheDate
