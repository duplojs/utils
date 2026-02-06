import { D } from "@duplojs/utils";

const dateValue = D.create("2025-10-20");
// dateValue: TheDate

const nextDay = D.addDays(dateValue, 1);
// nextDay: TheDate

const nativeDate = nextDay.toNative();
// nativeDate: Date

const serialized = D.serialize(nextDay);
// serialized: SerializedTheDate
// example serialized format: "date1760918400000+"
