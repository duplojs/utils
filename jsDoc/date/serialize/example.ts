import { D } from "@scripts";

const inputDate = D.create("2024-06-20");
const resultDate = D.serialize(inputDate);
// resultDate: SerializedTheDate

const inputTime = D.createTime(4, "day");
const resultTime = D.serialize(inputTime);
// resultTime: SerializedTheTime

const resultDate2 = D.serialize(
	D.create("2025-10-20"),
);
// resultDate2: SerializedTheDate
