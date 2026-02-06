import { D, pipe } from "@scripts";

const input = D.create("2024-06-19");
const firstDay = D.getFirstDayOfMonth(input);
// firstDay: TheDate

const serialized = D.serialize(firstDay);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.getFirstDayOfMonth,
); // TheDate
