import { D, type ExpectType } from "@duplojs/utils";

const input = [
	D.createTime(120000, "millisecond"),
	D.createTime(60000, "millisecond"),
	D.createTime(30000, "millisecond"),
] as const;

const result = D.sortTimes(input, "ASC");

type check = ExpectType<
	typeof result,
	D.TheTime[],
	"strict"
>;
