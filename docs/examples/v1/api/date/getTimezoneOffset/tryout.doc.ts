import { D } from "@duplojs/utils";

const theDate = D.createOrThrow(1704067200000);
const offset = D.getTimezoneOffset(theDate, "America/New_York");
// offset: -18000000
