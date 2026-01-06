import { C, D } from "@duplojs/utils";

const rawDate = D.create("2024-01-01");
const input = C.Date.createOrThrow(rawDate);

const rawTime = D.createTime(3600000);
const time = C.Time.createOrThrow(rawTime);

const result = C.dateAddTime(input, time);
