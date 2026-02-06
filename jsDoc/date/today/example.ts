import { D } from "@scripts";

const value = D.today();
// value: TheDate

const hour = D.getHour(value);
// hour: 0

const serialized = D.serialize(value);
// serialized: SerializedTheDate
