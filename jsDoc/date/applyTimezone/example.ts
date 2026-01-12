import { D, pipe } from "@scripts";

const theDate = D.createOrThrow(1704067200000);
const shiftedDate = D.applyTimezone(theDate, "America/New_York");
// shiftedDate: "date1704085200000+"

pipe(
	theDate,
	D.applyTimezone("America/New_York"),
); // shiftedDate: "date1704085200000+"
