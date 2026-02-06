import { D, pipe } from "@scripts";

const fromTimestamp = D.createOrThrow(1_700_000_000_000);
// fromTimestamp: TheDate

const fromSerialized = D.createOrThrow("date1700000000000+");
// fromSerialized: TheDate

const fromDate = D.createOrThrow(new Date("2024-06-20T12:00:00Z"));
// fromDate: TheDate

pipe(
	fromTimestamp,
	(value) => D.createOrThrow(value),
); // TheDate
