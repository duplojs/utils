import { D } from "@duplojs/utils";

const theDate = D.createOrThrow(1704067200123);
const fullFormat = D.format(theDate, "YYYY-MM-DD HH:mm:ss.SSS ZZ", "UTC");
// fullFormat: "2024-01-01 00:00:00.123 UTC"
