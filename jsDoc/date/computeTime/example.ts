import { D, pipe } from "@scripts";

const input = D.createTime(7_200_000, "millisecond");

const hours = D.computeTime(input, "hour");
// hours: number

const minutesFromSerialized = D.computeTime("time3600000-", "minute");
// minutesFromSerialized: number

const days = pipe(
	D.createTime(172_800_000, "millisecond"),
	D.computeTime("day"),
);
// days: number
