import { D, pipe } from "@scripts";

const input = D.create("2024-06-19");
const lastDay = D.getLastDayOfMonth(input);
// lastDay: TheDate

const serialized = D.serialize(lastDay);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.getLastDayOfMonth,
); // TheDate
