import { C, D } from "@duplojs/utils";

const rawDate = D.create("2024-01-02");
const input = C.Date.createOrThrow(rawDate);

const rawTime = D.createTime(86400000);
const time = C.Time.createOrThrow(rawTime);

const result = C.dateSubtractTime(input, time);
