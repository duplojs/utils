import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.addSeconds(input, 5);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.addSeconds(5),
); // TheDate
