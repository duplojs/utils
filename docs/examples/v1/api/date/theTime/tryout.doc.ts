import { D } from "@duplojs/utils";

const duration = D.createTime(2, "hour");
// duration: TheTime

const serialized = D.serialize(duration);
// serialized: SerializedTheTime
// example serialized format: "time7200000+"

const dateValue = D.create("2025-10-20");
const withDuration = D.addTime(dateValue, duration);
// withDuration: TheDate

const printed = D.formatTime(duration, "HH:mm:ss");
// printed: string
