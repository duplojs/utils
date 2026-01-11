import { D, pipe } from "@scripts";

const theDate = D.createOrThrow(1704067200123);
const fullFormat = D.format(theDate, "YYYY-MM-DD HH:mm:ss.SSS ZZ", "UTC");
// fullFormat: "2024-01-01 00:00:00.123 UTC"

pipe(
	theDate,
	D.format("YYYY-MM-DD HH:mm:ss.SSS ZZ", "UTC"),
); // fullFormat: "2024-01-01 00:00:00.123 UTC"
