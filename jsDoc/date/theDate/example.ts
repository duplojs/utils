import { D } from "@scripts";

const theDate = D.create("2025-10-20");
// theDate: TheDate

const timestamp = theDate.getTime();
// timestamp: number

const nativeDate = theDate.toNative();
// nativeDate: Date

const serialized = D.serialize(theDate);
// serialized: SerializedTheDate

const yearInParis = D.getYear(theDate, "Europe/Paris");
// yearInParis: number

const datePlusOneDay = D.addDays(theDate, 1);
// datePlusOneDay: TheDate

const iso = D.toISOString(theDate);
// iso: string
