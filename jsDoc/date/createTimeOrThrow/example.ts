import { D, pipe } from "@scripts";

const fromNumber = D.createTimeOrThrow(90_000);
// fromNumber: TheTime

const fromSerialized = D.createTimeOrThrow("time3600000+");
// fromSerialized: TheTime

const fromSpooling = D.createTimeOrThrow({
	hour: 1,
	minute: 30,
});
// fromSpooling: TheTime

pipe(
	fromNumber,
	(value) => D.createTimeOrThrow(value),
); // TheTime
