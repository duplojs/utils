import { D, pipe } from "@scripts";

const input = D.create("2024-06-19");
const firstDay = D.getFirstDayOfWeek(input);
// firstDay: TheDate

const serialized = D.serialize(firstDay);
// serialized: SerializedTheDate

pipe(
	serialized,
	D.getFirstDayOfWeek,
); // TheDate
