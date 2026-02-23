import { D } from "@duplojs/utils";

const input = D.createTime(7_200_000, "millisecond");

const hours = D.computeTime(input, "hour");
// hours: 2

const days = D.computeTime("time172800000+", "day");
// days: 2

const minutes = D.computeTime("minute")(D.createTime(120_000, "millisecond"));
// minutes: 2
