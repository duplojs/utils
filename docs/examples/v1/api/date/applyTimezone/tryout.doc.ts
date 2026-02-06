import { D } from "@duplojs/utils";

const theDate = D.createOrThrow(1704067200000);
const shiftedDate = D.applyTimezone(theDate, "America/New_York");
// shiftedDate: TheDate
