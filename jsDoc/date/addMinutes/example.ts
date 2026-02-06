import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.addMinutes(input, 45);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.addMinutes(45),
); // TheDate
