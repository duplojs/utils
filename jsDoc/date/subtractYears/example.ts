import { D, pipe } from "@scripts";

const input = D.create("2024-06-20");
const result = D.subtractYears(input, 1);
// result: TheDate

const serialized = D.serialize(result);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.subtractYears(1),
); // TheDate
